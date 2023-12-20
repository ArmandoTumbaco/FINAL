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
export class PagoComponent implements OnInit {
  paymentForm!: FormGroup;
  isPaymentSuccessful: boolean = false;
  cardNumberError: string | null = null;
  cardNameError: string | null = null;
  expirationDateError: string | null = null;
  cvvError: string | null = null;

  constructor(private pagoServices: PagoServices, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      cardName: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  validateCardNumber(cardNumber: string): string | null {
    if (cardNumber.trim() === '') {
      return 'Card number is required.';
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      return 'Debe tener 16 digitos.';
    }

    return null;
  }

  async onSubmit() {
    this.cardNumberError = this.validateCardNumber(this.paymentForm.value.cardNumber);
    this.cardNameError = validateCardName(this.paymentForm.value.cardName);
    this.expirationDateError = validateExpirationDate(this.paymentForm.value.expiryDate);
    this.cvvError = validateCVV(this.paymentForm.value.cvv);

    if (!this.cardNumberError && !this.cardNameError && !this.expirationDateError && !this.cvvError) {
      console.log('Los datos de la tarjeta son válidos.');
      const response = await this.pagoServices.addPlace(this.paymentForm.value);
      console.log(response);
      if (response) {
        alert('Gracias tu pago fue existoso. Envío exitoso.');
        // Redirigir al usuario a la página de confirmación o a otro lugar
      } else {
        console.log('Hubo un error al enviar el mensaje');
        // Mostrar mensaje de error al usuario
      }
    } else {
      alert('Los datos de la tarjeta son inválidos. Por favor, ingresa datos correctos .');
      // Mostrar mensajes de error al usuario en el formulario
    }
  }
}

function validateCardName(cardName: string): string | null {
  if (cardName.trim() === '') {
    return 'Card name is required.';
  }
  return null;
}

function validateExpirationDate(expiryDate: string): string | null {
  if (expiryDate.trim() === '') {
    return 'Expiration date is required.';
  }
  // Add additional validation logic for the expiry date if needed
  return null;
}

function validateCVV(cvv: string): string | null {
  if (cvv.trim() === '') {
    return 'CVV is required.';
  }
  // Add additional validation logic for the CVV if needed
  return null;
}
