import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ValidatorFn, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage  implements OnInit {
  persona = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[kK]{1}")]),
    nombre: new FormControl('',[Validators.required,Validators.pattern("[a-z]{3,20}")]),
    correo: new FormControl('',[Validators.minLength(5), Validators.maxLength(40), Validators.required]),
    password: new FormControl('',[Validators.minLength(4), Validators.required]),
    fecha: new FormControl(Validators.required),
    genero: new FormControl(Validators.required),
    tipo_user: new FormControl(Validators.required),
    tiene_Auto: new FormControl(Validators.required),
    marca: new FormControl(),
    patente: new FormControl(),
  });

  Personas: any[] = [];

  miFormulario: FormGroup;
  mostrarInput: boolean = false;

  constructor(private alertController: AlertController, private usuarioService: UsuarioService,private router: Router, private fb: FormBuilder) { 
    this.miFormulario = this.fb.group({
      opcion: [''],
      inputExtra: ['']
    });
    
  }
  onOpcionChange(opcion: string) {
    this.mostrarInput = opcion === 'SI';
  }

  async ngOnInit() {
    this.Personas = await this.usuarioService.getPersonas();
  }

  async registrar() {
    if ( await this.usuarioService.crearPersona(this.persona.value)) {
      await this.presentAlert('Perfecto', 'Registrado correctamente');
      this.persona.reset();
      await this.usuarioService.getPersonas();
    } else {
      await this.presentAlert('Error', 'El usuario no se pudo registrar');
    }
  }

  buscar(usuario: any) {
    this.persona.patchValue(usuario);
  }

  async eliminar(rut: string) {
    if (await this.usuarioService.EliminarPersona(rut)) {
      this.Personas = await this.usuarioService.getPersonas();
    }
  }

  async modificar() {
    var rut_modificar = this.persona.controls.rut.value || "";
    if (await this.usuarioService.ActualizarPersona(rut_modificar, this.persona.value)) {
      this.presentAlert('Perfecto!', 'Modificado correctamente');
      this.Personas = await this.usuarioService.getPersonas();
    } else {
      this.presentAlert('Error!', 'No se pudo modificar');
    }
  }
  anosvalidar(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const birthDate = new Date(control.value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return (age >= minAge && age <= maxAge) ? null : { 'invalidAge': true };
    };
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