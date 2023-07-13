import { Component, OnInit } from '@angular/core';
import { ReservaServices } from 'src/app/services/reserva.services';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent  {
registroForm!: FormGroup ;
isRegistroSuccessful:boolean = false;

  constructor(private reservaServices: ReservaServices, private formBuilder: FormBuilder) {}
  ngOnInit() {
  this.registroForm = this.formBuilder.group({
    nombre: new FormControl('', Validators.required),
    telefono:  new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    Tipo_Clase: new FormControl('', Validators.required),
  });
}
  async submitForm() {
    console.log(this.registroForm.value);
      const response = await this.reservaServices.addPlace(this.registroForm.value);
      console.log(response);

      if (response) {
        alert('Gracias su reserva se envio correctamente.');
     
        
      } else {
        console.log('Hubo un error al enviar el mensaje.');
      }

  }
}


