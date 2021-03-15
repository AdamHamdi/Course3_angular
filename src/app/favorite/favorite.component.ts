import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './../interfaces/course';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  ma_valeur: string ="valeur initiale"
  titre="liste des cours"
  UE: Course[]=[
     {titre :"c1", nb_etud:2},
     {titre :"c2", nb_etud:5},
  ]
  nb_etuds :number

  @Input() isFavorite: boolean = false;
  @Output() myEvent = new EventEmitter() ;

  constructor() { }

  ngOnInit(): void {
    this.getNbEtuds()
  }
 onFavoriteClick(){
   this.isFavorite= !this.isFavorite;
   this.myEvent.emit(555);
 }
 getTitre(){
   return this.titre;
 }
 modifTitre(){
   this.titre=this.ma_valeur;
}
onNewNb(delta :number){
  this.nb_etuds += delta;
}
getNbEtuds(){
  this.nb_etuds=0;
  for (let ue of this.UE)
  this.nb_etuds += ue.nb_etud
}
}
