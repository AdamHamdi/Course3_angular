import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  tab: Array<string> = ['premier', 'deuxième', 'troisi`eme'];
  nord = 'Lille';
  sud = 'Marseille';
  capitale = 'Paris';
  constructor() { }

  ngOnInit(): void {
  }

}
