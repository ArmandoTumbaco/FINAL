import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreciosRoutingModule } from './precios-routing.module';
import { PreciosComponent } from './precios.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    PreciosRoutingModule,
    RouterModule
  ]
})
export class PreciosModule { }
