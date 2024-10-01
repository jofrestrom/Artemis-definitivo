import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private router: Router,private usuarioService: UsuarioService) { }

  
  Personas: any[] = [];

  login(){
    if(this.usuarioService.getCorreo(this.email) && this.usuarioService.getPassword(this.password)){
      this.router.navigate(['/home']);
    }else{
      alert("CORREO O CONTRASEÑA INCORRECTOS!");
    }
  }

  ngOnInit() {
    this.Personas = this.usuarioService.getPersonas();

  }
  registro(){
    this.router.navigate(['/register']);
  }
  recuperar(){
    this.router.navigate(['/recuperar']);
  }

}
