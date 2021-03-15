import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './../interfaces/course';
import { CourseserviceService } from './../courseservice.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  ma_valeur: string ="valeur initiale"
  titre="liste des cours"
  UE: Course[];
  nb_etuds :number

  @Input() isFavorite: boolean = false;
  @Output() myEvent = new EventEmitter() ;

  constructor( private service:CourseserviceService) {
   
   
   }

  ngOnInit(): void {
    this.UE= this.service.getCourses();
   
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
