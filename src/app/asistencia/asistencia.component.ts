import { Component, OnInit } from '@angular/core';

import { PlacesService }from 'src/app/services/places.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder,  Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitaServices } from '../services/visita.services';
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent   {
  registroForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z\s]*$/)]],
    fecha: ['', Validators.required],
    hora: ['', Validators.required]
  });

  constructor(private visitaService: VisitaServices, private formBuilder: FormBuilder) {}

  async submitForm() {
    console.log(this.registroForm.value);

    if (this.registroForm.valid) {
      const response = await this.visitaService.addPlace(this.registroForm.value);
      console.log(response);

      if (response) {
        alert('Gracias por tu visita. El mensaje se envió con éxito.');
        this.registroForm.reset();
      } else {
        console.log('Hubo un error al enviar el mensaje.');
      }

  }
}
}