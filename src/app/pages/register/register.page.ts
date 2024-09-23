import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {
  contrasena: string = '';
  confirmar: string = '';
  correo: string = '';
  mensaje: string = '';
  mensajecorreo: string = '';
    
  persona = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[kK]{1}")]),
    nombre: new FormControl('',[Validators.required,Validators.pattern("[a-z]{3,20]")]),
    correo: new FormControl('',[Validators.minLength(5), Validators.maxLength(40), Validators.required]),
    contrasena: new FormControl('',[Validators.minLength(4), Validators.required]),
    fecha_nacimiento: new FormControl(),
    genero: new FormControl(),
    tipo_user: new FormControl()
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

  emailREGX = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

  
  public registrar():void{
    if (this.contrasena === this.confirmar) {
      if(this.emailREGX.test(this.correo)){
        console.log(this.persona.value);
        alert("Registrado con exito");
        this.router.navigate(['/login']);  
      }else{
        this.mensajecorreo = 'el correo es invalido'
      }
    }else{
      this.mensaje = 'las contraseñas o usuario incorrectos';
    }
    
  }

}
