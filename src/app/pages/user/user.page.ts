import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  
  Personas: any[] = [];

  constructor(private route: Router,private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.Personas = this.usuarioService.getPersonas();
  }

  exit(){
    this.route.navigate(['/login']);
  }

}
