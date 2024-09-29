import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private alertController: AlertController,private usuarioService: UsuarioService,private router: Router) { }

  login(){
    if(this.usuarioService.getCorreo(this.email) && this.usuarioService.getPassword(this.password)){
      this.router.navigate(['/home']);
    }else{
      alert("CORREO O CONTRASEÑA INCORRECTOS!");
    }
  }

  ngOnInit() {
  }
  registro(){
    this.router.navigate(['/register']);
  }
  recuperar(){
    this.router.navigate(['/recuperar']);
  }

}
