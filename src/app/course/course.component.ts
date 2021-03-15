import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from './../interfaces/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input()  contenu :Course;
  @Output() newNb = new EventEmitter<number>();
  lastNb :number;
  constructor() { }

  ngOnInit(): void {
    this.lastNb=this.contenu.nb_etud;
  }
  updateNB(){

    let nb= this.contenu.nb_etud-this.lastNb;
    this.lastNb= this.contenu.nb_etud;
    this.newNb.emit(nb);
  }
}
