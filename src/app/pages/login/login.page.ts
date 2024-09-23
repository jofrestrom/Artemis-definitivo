import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private router: Router) { }

  login(){
    if(this.email=="admin@duocuc.cl" && this.password=="admin123"){
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
