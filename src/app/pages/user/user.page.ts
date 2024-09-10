import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  home(){
    this.route.navigate(['/home']);
  }
  admin(){
    this.route.navigate(['/administracion']);
  }
  reserva(){
    this.route.navigate(['/reserva']);
  }


}
