import { Injectable } from "@angular/core";
import { Firestore, query, getDocs, addDoc, collectionData } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { Class } from "../interfaces/class.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ClaseServices {
    constructor(private firestore : Firestore){}
    addPlace(clase: Class) {
       const placeRef = collection(this.firestore, 'Clases');
       return addDoc(placeRef, clase);
    }
    obtenerClases(): Observable<Class[]> {
        const clasesRef = collection(this.firestore, 'Clases');
        return collectionData (clasesRef, {idField:'id'}) as Observable<Class[]>;      
     }
 }
    
    
    

