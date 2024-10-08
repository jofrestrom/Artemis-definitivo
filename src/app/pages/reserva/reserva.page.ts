import { Attribute, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {
  

  constructor(private route: Router) {
   
   }
  

  admin(){
    this.route.navigate(['/administracion']);
  }
  user(){
    this.route.navigate(['/user']);
  }
  home(){
    this.route.navigate(['/home']);
  }
   exit(){
      this.route.navigate(['/login']);
    }


  ngOnInit() {
  }

}
