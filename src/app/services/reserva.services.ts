import { Injectable } from "@angular/core";
import { Firestore, addDoc } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { Reservas } from "../interfaces/reservas.interfaces";
@Injectable({
    providedIn: 'root'
})
export class ReservaServices {
    constructor(private firestore: Firestore){}
    addPlace(reserva: Reservas){
       const placeRef = collection(this.firestore, 'Reserva');
       return addDoc(placeRef, reserva);
    }
    }
