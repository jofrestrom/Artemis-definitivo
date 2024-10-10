import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  isMenuVisible = true;
  usuario: any;

  constructor(private route: Router,private usuarioService: UsuarioService) { }


  



  async ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('Usuario') || '');
    console.log(this.usuario)
  }

  exit(){
    localStorage.removeItem('usuario')
    this.route.navigate(['/login']);
  }

  toggleMenu() {
    const menuElement = document.getElementById('menu-list');
    
    if (menuElement) {
      this.isMenuVisible = !this.isMenuVisible;
      menuElement.style.display = this.isMenuVisible ? 'block' : 'none';
    }
  }

}
