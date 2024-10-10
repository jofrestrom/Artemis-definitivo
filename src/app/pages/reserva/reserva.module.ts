import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaPageRoutingModule } from './reserva-routing.module';

import { ReservaPage } from './reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ReservaPage]
})
export class ReservaPageModule {}
