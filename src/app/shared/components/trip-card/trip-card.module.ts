import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from './trip-card.component';

@NgModule({
  declarations: [
    TripCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TripCardComponent
  ]
})
export class TripCardModule { }
