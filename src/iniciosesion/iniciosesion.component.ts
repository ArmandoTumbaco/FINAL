import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {
  
  formLogin: FormGroup;
  showErrorMessage: boolean | undefined;

  constructor(private placesService: PlacesService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  redirectToMain() {
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {}

  async onSubmit() {
    this.showErrorMessage = false; 

    try {
      const response = await this.placesService.iniciosesion(this.formLogin.value);
      console.log(response);
      this.router.navigate(['/inicio']);
    } catch (error) {
      console.log(error);
      this.showErrorMessage = true; 
    }
  }

  onClick() {
    this.placesService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(error => console.log(error));
  }
}
