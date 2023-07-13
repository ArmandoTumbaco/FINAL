import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { IniciosesionComponent } from 'src/iniciosesion/iniciosesion.component';
import { RegisterComponent } from './register/register.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PagoComponent } from './pago/pago.component';
import { RouterModule } from '@angular/router';
import { PreciosComponent } from './precios/precios.component';
import { FirestoreModule, provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { ClasesComponent } from './clases/clases.component';
import { ReservasComponent } from 'src/reservas/reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciosesionComponent,
    RegisterComponent,
    AsistenciaComponent,
    NavegacionComponent,
    PagoComponent,
    PreciosComponent,
    ClasesComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   RouterModule,
   ToastrModule.forRoot(),
   FirestoreModule,
  
   

      
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
