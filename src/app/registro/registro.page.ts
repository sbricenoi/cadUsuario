import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registro = {
    rut: '',
    correo: '',
    nombre: '',
    apellido: '',
    telefono: '',
    pass: '',
    comuna: '',
    ciudad: '',
    direccion: '',
    fecha_nac: '',
    avatar: 'No tengo',
    accion: 'registro',
  };

  correo2: string;
  calle: string;
  numero: string;
  depto: string;
  pass2: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertControler: AlertController
  ) {}
    async alerta_error(){
      const alert  = await this.alertControler.create({
        header: 'Aqui el Título',
        message:'Aqui el mensaje',
        buttons: ['Aqui el texto del botón']
      });

      await alert.present();
    }

  registroForm() {
    if (
      this.correo2 === this.registro.correo &&
      this.pass2 === this.registro.pass
    ) {
      this.registro.direccion = this.calle + this.numero + this.depto;
      let headers = new HttpHeaders().set('Content-type', 'application/json');
      headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
      headers.append('Access-Control-Allow-Credentials', 'true');
      let params = JSON.stringify(this.registro);
      this.http
        .post<any>('https://cad.onlineweb.cl/api.php', params, {
          headers: headers,
        })
        .subscribe((res) => {
          console.log(res);
          if (res.message != 'Error') {

            this.router.navigate(['cad/home-cad']);
          } else {
           
            this.alerta_error();
          }
        });
    }
  }

  ngOnInit() {}
}
