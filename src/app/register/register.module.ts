import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
