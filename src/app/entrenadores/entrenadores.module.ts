import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrenadoresRoutingModule } from './entrenadores-routing.module';
import { EntrenadoresComponent } from './entrenadores.component';


@NgModule({
  declarations: [
    EntrenadoresComponent
  ],
  imports: [
    CommonModule,
    EntrenadoresRoutingModule
  ]
})
export class EntrenadoresModule { }
