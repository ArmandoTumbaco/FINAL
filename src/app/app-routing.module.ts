import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from 'src/iniciosesion/iniciosesion.component';
import { ReservasComponent } from 'src/reservas/reservas.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ClasesComponent } from './clases/clases.component';
import { EntrenadoresComponent } from './entrenadores/entrenadores.component';
import { InformacionComponent } from './informacion/informacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PagoComponent } from './pago/pago.component';
import { PreciosComponent } from './precios/precios.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path: '', redirectTo: 'iniciosesion', pathMatch: 'full'},
  {path: 'iniciosesion', component: IniciosesionComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'asistencia', component: AsistenciaComponent},
  { path: 'caracteristicas', component: CaracteristicasComponent },
  { path: 'clases', component: ClasesComponent},
  { path: 'entrenadores', component: EntrenadoresComponent},
  { path: 'informacion', component: InformacionComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'navegacion', component: NavegacionComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'precios', component: PreciosComponent},
  { path: 'pago', component: PagoComponent},
  
  
  { path: 'reservas', component: ReservasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
