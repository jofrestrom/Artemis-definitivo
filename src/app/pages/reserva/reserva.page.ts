import { Attribute, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {
  
    miFormulario: FormGroup;
    mostrarInput: boolean = false;

  usuario: any;

  constructor(private route: Router,  private fb: FormBuilder,private alertController: AlertController) {
    this.miFormulario = this.fb.group({
      opcion: [''],
      inputExtra: ['']
    });
  }

  async crearViaje(){
    await this.presentAlert("", "")
  }
   onOpcionChange(opcion: string) {
    if(opcion === 'Pirque'){
      this.mostrarInput = opcion === 'Pirque';
    }
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('Usuario') || '');
    console.log(this.usuario)
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Entendido'],
    });
    await alert.present();
  }

}
