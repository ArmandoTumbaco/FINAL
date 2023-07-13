import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaracteristicasRoutingModule } from './caracteristicas-routing.module';
import { CaracteristicasComponent } from './caracteristicas.component';


@NgModule({
  declarations: [
    CaracteristicasComponent
  ],
  imports: [
    CommonModule,
    CaracteristicasRoutingModule
  ]
})
export class CaracteristicasModule { }
