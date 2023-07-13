import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrenadoresComponent } from './entrenadores.component';

const routes: Routes = [{ path: '', component: EntrenadoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrenadoresRoutingModule { }
