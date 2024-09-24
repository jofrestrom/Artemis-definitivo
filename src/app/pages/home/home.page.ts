import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
titulo: string ="Artemis Home";

  constructor(private route: Router) {}
    admin(){
      this.route.navigate(['/administration']);
    }
    user(){
      this.route.navigate(['/user']);
    }
    reserva(){
      this.route.navigate(['/reserva']);
    }
    exit(){
      this.route.navigate(['/login']);
    }

}
