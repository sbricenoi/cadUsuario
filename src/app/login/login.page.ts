import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  usuario = {
    rut: '',
    clave: '',
    accion: 'login',
  };
  Login() {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8101');
    headers.append('Access-Control-Allow-Credentials', 'true');
    let params = JSON.stringify(this.usuario);
    this.http
      .post<any>('https://cad.onlineweb.cl/api.php', params, {
        headers: headers,
      })
      .subscribe((res) => {
        console.log(res);
        if (res.resultado.length != 0) {
          /**
           * Guardamos en LocalStorage todo el Json en un item que crearemos ahora.
           */
          localStorage.setItem('dataUser', JSON.stringify(res));
          this.router.navigate(['cad/home-cad']); //tenemos que entrar al componente de este page.
        } else {
          /**
           * En caso de que exista un error eliminamos la informacion si es que existe anteriormente.
           */
          localStorage.removeItem('dataUser');
          console.log('perdedor!');
        }
      });
  }

  ngOnInit() {}
}
