import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;
  constructor(private PlacesService: PlacesService,
    private router: Router
  ) { 
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  redirigirAlSesion() {
    this.router.navigate(['/iniciosesion']);
    }
  ngOnInit(): void {
  }
  onSubmit() {
    this.PlacesService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/iniciosesion']);
      })
      .catch(error => console.log(error));
  }

}


