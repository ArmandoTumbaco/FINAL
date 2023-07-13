import { Injectable } from "@angular/core";
import { Firestore, addDoc } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { Pagos } from "../interfaces/pagos.interface";

@Injectable({
    providedIn: 'root'
})
export class PagoServices {
    constructor(private firestore: Firestore){}
    addPlace(pago: Pagos){
       const pagosRef = collection(this.firestore, 'tarjetas');
       return addDoc(pagosRef,pago);
    }
    }
