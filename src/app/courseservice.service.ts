import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor() { }

  getCourses(){
    return [
      {titre :"c1", nb_etud:2},
      {titre :"c2", nb_etud:0},
      {titre :"c3", nb_etud:5},
   ]
  }
}
