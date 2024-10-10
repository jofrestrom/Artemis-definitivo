import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string = "";
  password: string = "";

  constructor(private router: Router,private usuarioService: UsuarioService) { }

  async ngOnInit() {
    this.Personas = await this.usuarioService.getPersonas();
    this.Persona = await this.usuarioService.getPersona(this.correo);
  }
  
  Personas: any[] = [];
  Persona: any[] = [];

  async login(){
    if(await this.usuarioService.Validacion(this.correo, this.password)){
      this.router.navigate(['/home']);
    }else{
      alert("CORREO O CONTRASEÑA INCORRECTOS!");
    }
  }

  registro(){
    this.router.navigate(['/register']);
  }
  recuperar(){
    this.router.navigate(['/recuperar']);
  }

}
