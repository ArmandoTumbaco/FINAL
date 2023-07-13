import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasComponent } from './caracteristicas.component';

const routes: Routes = [{ path: '', component: CaracteristicasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaracteristicasRoutingModule { }
