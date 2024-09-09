import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  constructor(private route: Router ) { }

  admin(){
    this.route.navigate(['/administracion']);
  }
  user(){
    this.route.navigate(['/user']);
  }
  home(){
    this.route.navigate(['/home']);
  }


  ngOnInit() {
  }

}
