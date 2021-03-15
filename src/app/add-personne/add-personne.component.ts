import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from './../interfaces/personne';
import { PersonneService } from './../service/personne.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {
  newPersonne = new Personne();
  constructor(private ser:PersonneService , private router:Router) { }

  ngOnInit(): void {
  }
  ajouterPersonne(){
    console.log(this.newPersonne);
    this.ser.ajouterPersonne(this.newPersonne);
    this.router.navigate(['personne'])
    
    }
}
