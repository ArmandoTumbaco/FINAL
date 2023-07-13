import { Component } from '@angular/core';
import { FormGroup,  FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ULEAMFIT';
  constructor(private router: Router) {}

  isRegistroOrInicioSesionRoute(): boolean {
    const currentRoute = this.router.url;
    return currentRoute.includes('register') || currentRoute.includes('iniciosesion');
  }

}
