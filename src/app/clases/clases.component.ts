import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaseServices } from '../services/clase.services';
import { Class } from '../interfaces/class.interface'
@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent  {
  claForm: FormGroup;
  clases: Class[] = [];
  indiceEditar: number = -1;

  constructor(private claseService: ClaseServices, private formBuilder: FormBuilder) {
    this.claForm = this.formBuilder.group({
      hora: ['', Validators.required],
      lunes: ['', Validators.required],
      martes: ['', Validators.required],
      miercoles: ['', Validators.required],
      jueves: ['', Validators.required],
      viernes: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.obtenerClases(); // Llama al método para obtener las clases al inicializar el componente
  }
async agregarClase() {
  
  if (this.claForm.valid) {
    const response = await this.claseService.addPlace(this.claForm.value);
    console.log(response);

    if (response) {
      alert('Gracias por tu visita. El mensaje se envió con éxito.');
      this.claForm.reset();
    } else {
      console.log('Hubo un error al enviar el mensaje.');
    }
  }
}

obtenerClases() {
  this.claseService.obtenerClases().subscribe((clases: Class[]) => {
    this.clases = clases;
  });

    if (this.claForm.invalid) {
      return;
    }

    const nuevaClase = this.claForm.value;
    if (this.indiceEditar !== -1) {
      // Editar fila existente
      this.clases[this.indiceEditar] = nuevaClase;
      this.indiceEditar = -1;
    } else {
      // Agregar nueva fila al inicio del array
      this.clases.unshift(nuevaClase);
    }

    this.claForm.reset();
  }

  eliminarClase(index: number) {
    this.clases.splice(index, 1);
    if (this.indiceEditar === index) {
      this.indiceEditar = -1;
    }
  }

  editarClase(index: number) {
    this.indiceEditar = index;
    const claseEditar = this.clases[index];
    this.claForm.patchValue(claseEditar);
    this.claForm.markAsUntouched(); // Marcar el formulario como no modificado
    this.claForm.markAsPristine(); // Marcar el formulario como no tocado
    this.claForm.enable(); // Habilitar el formulario
    this.claForm.controls['hora'].enable(); // Deshabilitar el campo 'hora'
    
  }
  guardarClase() {
    if (this.claForm.invalid || this.indiceEditar === -1) {
      return;
    }
  
    const claseEditada = this.claForm.value;
    this.clases[this.indiceEditar] = claseEditada;
    this.indiceEditar = -1;
    this.claForm.reset();
  }
  cancelarEdicion() {
    this.indiceEditar = -1;
    this.claForm.reset();
  }

  
}