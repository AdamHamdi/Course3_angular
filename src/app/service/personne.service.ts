import { Injectable } from '@angular/core';
import { Personne } from './../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  personnes :Personne [];
   personne :Personne;

  constructor() { 
    this.personnes = [];
  }
  listePersonnes() {
    return this.personnes;
  }
  ajouterPersonne(p : Personne){
    this.personnes.push(p);
   
    }
}
