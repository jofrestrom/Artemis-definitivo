import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  titulo: string ="Artemis Home";
  miFormulario: FormGroup;
  mostrarInput: boolean = false;
  Admin: boolean = false;
  name: string = '';

  usuario: any;

  constructor(private usuarioService: UsuarioService,private fb: FormBuilder, private route: Router) {
    
    this.miFormulario = this.fb.group({
      opcion: [''],
      inputExtra: ['']
    });
  }
  
  async ngOnInit() {
    //this.Personas = await this.usuarioService.getPersonas();
    this.usuario = JSON.parse(localStorage.getItem('Usuario') || '');
    console.log(this.usuario)
  }

  onOpcionChange(opcion: string) {
    this.mostrarInput  = opcion == this.name;
  }

}
