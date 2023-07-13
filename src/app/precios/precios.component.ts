import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent  {
  constructor(private router: Router) {}

  redirigirAlPago() {
    this.router.navigate(['/pago']);
  }
}


