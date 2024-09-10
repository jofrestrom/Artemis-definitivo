import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  home(){
    this.route.navigate(['/home']);
  }
  user(){
    this.route.navigate(['/user']);
  }
  reserva(){
    this.route.navigate(['/reserva']);
  }

}
