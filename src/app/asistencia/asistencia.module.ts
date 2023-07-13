import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { AsistenciaComponent } from './asistencia.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    AsistenciaRoutingModule,
    FormsModule
  ]
})
export class AsistenciaModule { }
