import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { PagoServices } from '../services/pago.services';
@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent   {
  paymentForm!: FormGroup;
  isPaymentSuccessful: boolean = false;

  constructor(private pagoServices: PagoServices, 
    private formBuilder: FormBuilder, private router: Router ) {}
    ngOnInit() {
      this.paymentForm = this.formBuilder.group({
        cardNumber: new FormControl ('', Validators.required),
        cardName: new FormControl ('', Validators.required),
        expiryDate: new FormControl ('', Validators.required),
        cvv: new FormControl ('', Validators.required),
      });
    }
  
    async onSubmit() {
      console.log(this.paymentForm.value);
      const response= await this.pagoServices.addPlace(this.paymentForm.value);
    console.log(response);
    
  if (response) {
    alert('Gracias por tu visita envia con exito');
  
  } else {
    console.log('Hubo un error al enviar el mensaje');
  }
  }
  }
  