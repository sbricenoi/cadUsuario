import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home-cad',
  templateUrl: './home-cad.page.html',
  styleUrls: ['./home-cad.page.scss'],
})
export class HomeCadPage implements OnInit {
  /**Creamos una variable para tomar lo del localstorage e imprimirlo */

  user = JSON.parse(localStorage.getItem('dataUser')); //tenemos que parsearlo para que nos quede como un objeto.

  imgqr:string;
  rut=this.user.resultado.persona.rut_persona;
  constructor(public menu: MenuController, private http: HttpClient) {}

  tomarQr(rut: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    let params = new HttpParams();
    params = params.append('section', '#link');
    params = params.append('optionlogo', 'none');
    params = params.append('backcolor', '#FFFFFF');
    params = params.append('frontcolor', '#000000');
    params = params.append('size', '16');
    params = params.append('level', 'Q');
    params = params.append('style', 'default');
    params = params.append('link', 'https://usuario.cad.cl/?RUN=' + rut);
    params = params.append('networktype', 'WEP');
    params = params.append('vversion', '2.1');
    params = params.append('pp_type', '_xclick');
    params = params.append('pp_currency', 'USD');

    this.http
      .post<any>('http://qr.onlineweb.cl/include/process.php', params, {
        headers: headers,
      })
      .subscribe((res) => {
        console.log(res);
        this.imgqr='http://qr.onlineweb.cl/'+res.placeholder;
      });
  }

  ngOnInit() {
    this.tomarQr(this.user.resultado.persona.rut_persona);
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
