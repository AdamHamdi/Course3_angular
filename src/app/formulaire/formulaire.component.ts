import { Component, Input, OnInit } from '@angular/core';
import { Personne } from './../interfaces/personne';
import { PersonneService } from './../service/personne.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  personnes: Personne[]

  

constructor(private ser:PersonneService) {
  this.personnes=ser.listePersonnes();
}
ngOnInit(): void {
   this.personnes ;
 }


  // listePersonnes():Personne[] {
  //   return this.personnes;
  // }
}
