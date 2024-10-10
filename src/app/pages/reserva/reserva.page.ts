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
  

  exit(){
    this.route.navigate(['/login']);
  }


  ngOnInit() {
  }

}
