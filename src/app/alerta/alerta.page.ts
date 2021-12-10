import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage {
  public entidad:string;
  public segundos = 10;
  public confirma = true;
  public inicio = false;

  constructor(public menu:MenuController,public toastController:ToastController) {}

  openMenu() {
    this.menu.enable(true, 'first');    
    this.menu.open('first');
  }
  alerta(){
    console.log(this.entidad);
    this.segundos = 10;
    this.conteo();
  }

  async conteo(){    
    this.inicio = true;
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    await this.delay(1)
    this.segundos--
    this.inicio = false;
    if(this.confirma){
      this.enviar()
    }
    else{
      console.log("se cancelo")
    }
  }
  async delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }  
  async enviar(){
    const toast = await this.toastController.create({
      header:'Emergencia Alertada',
      message: 'Ha sido Enviada la alerta a '+this.entidad,
      position: 'bottom',
      duration: 3000,
      animated:true,
      translucent:true
    });
    await toast.present();
    console.log("enviando")
  }
  async cancelar(){
    const toast = await this.toastController.create({
      header:'Emergencia Cancelada',
      message: 'No se ha alertado a ninguna entidad',
      position: 'bottom',
      duration: 3000,
      animated:true,
      translucent:true
    });
    await toast.present();
    this.confirma=false;
    this.inicio = false;
  }
}
