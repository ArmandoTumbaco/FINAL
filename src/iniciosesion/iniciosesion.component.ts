import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { PlacesService }from 'src/app/services/places.service';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {
  
  formLogin: FormGroup;
  showErrorMessage: boolean | undefined;
  
  constructor(private PlacesService :PlacesService,  private router:Router) { 
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
}
redirectToMain() {
  this.router.navigate(['/register']);
  }

ngOnInit(): void {
}
onSubmit() {
  this.PlacesService.iniciosesion(this.formLogin.value)
  .then(response => {
    console.log(response);
    this.router.navigate(['/inicio']);
    
  })
  .catch(error => {console.log(error);
  this.showErrorMessage = true;
});
}
onClick() {
  this.PlacesService.loginWithGoogle()
    .then(response => {
      console.log(response);
      this.router.navigate(['/inicio']);
    })
    .catch(error=> console.log(error))
}

}
