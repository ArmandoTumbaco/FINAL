import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './iniciosesion.component';

const routes: Routes = [{ path: '', component: IniciosesionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IniciosesionRoutingModule { }
