import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {

  correo: string = '';
  mensaje: string = '';
  mensajecorreo: string = '';
  password: string = "";
  confirmPassword: string = "";

  miFormulario: FormGroup;
  mostrarInput: boolean = false;
  constructor(private router: Router, private fb: FormBuilder, private usuarioService: UsuarioService, private alertController: AlertController) {
    this.miFormulario = this.fb.group({
      opcion: [''],
      inputExtra: ['']
    });
  }

  onOpcionChange(opcion: string) {
    this.mostrarInput = opcion === 'SI';
  }

  Personas: any[] = [];
    
  persona = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[kK]{1}")]),
    nombre: new FormControl('',[Validators.required,Validators.pattern("[a-z]{3,20}")]),
    correo: new FormControl('',[Validators.minLength(5), Validators.maxLength(40), Validators.required]),
    password: new FormControl('',[Validators.minLength(8), Validators.required]),
    confirmpassword: new FormControl('',[Validators.minLength(8), Validators.required]),
    fecha: new FormControl(Validators.required),
    genero: new FormControl(Validators.required),
    tipo_user: new FormControl('Usuario'),
    tiene_Auto: new FormControl(Validators.required),
    marca: new FormControl(),
    patente: new FormControl(),
    cantidad_asientos: new FormControl(),
  });

  ngOnInit() {
  }

  validad_edad(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const fecha = new Date(control.value);
      const today = new Date();
      let age = today.getFullYear() - fecha.getFullYear();
      const monthDiff = today.getMonth() - fecha.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < fecha.getDate())) {
        age--;
      }

      return (age >= minAge && age <= maxAge) ? null : { 'invalidAge': true };
    };
  }
  
  async registrar() {
    
    if(this.persona.controls.password.value != this.persona.controls.confirmpassword.value){
      alert("las contraseñas no coinciden")
      return;
    }

    if(this.persona.controls.password.value != this.persona.controls.confirmpassword.value){
      await this.presentAlert('Problema', 'las contraseñas no coinsiden');
    }else if ( await this.usuarioService.crearPersona(this.persona.value)){
      await this.presentAlert('Perfecto', 'Registrado correctamente');
      console.log(this.persona.value)
      this.persona.reset();
      await this.usuarioService.getPersonas();
      this.router.navigate(['/login']);  
    } else {
      await this.presentAlert('Error', 'El usuario no se pudo registrar');
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
}
