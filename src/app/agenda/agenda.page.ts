import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor(private http:HttpClient) { }

  empresas:any;

  ngOnInit() {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8101');
    headers.append('Access-Control-Allow-Credentials', 'true');
    let params = JSON.stringify({'accion':'listar_empresas'});
    this.http
      .post <any> ('https://cad.onlineweb.cl/prueba_api.php', params, {
        headers: headers,
      })
      .subscribe((res) =>{
        this.empresas = res.data
        console.log(res)

      });
    

  }

}
