import { Injectable } from "@angular/core";
import { Firestore, addDoc } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { Visitas } from "../interfaces/visitas.interface";

@Injectable({
    providedIn: 'root'
})
export class VisitaServices {
    constructor(private firestore: Firestore){}
    addPlace(visita: Visitas){
       const visitasRef = collection(this.firestore, 'Visitas');
       return addDoc(visitasRef, visita);
    }



    }
