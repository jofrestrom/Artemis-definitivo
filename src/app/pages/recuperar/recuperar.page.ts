import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  email = "";

  constructor(private router: Router,private usuarioService: UsuarioService, private alertController: AlertController) { }

  async ENVIAR(){
    if( await this.usuarioService.recuperar(this.email)){
      await this.presentAlert('Perfecto', 'se envio un correo');
    }else{
      await this.presentAlert("MAAAAL!!","NO SE ENCONTRO EL CORREO");
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Entendido'],
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
