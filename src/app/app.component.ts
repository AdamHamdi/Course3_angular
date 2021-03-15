import { Component } from '@angular/core';
import { Personne } from './interfaces/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favorite=true

  done(e){
    // console.log(e)
    console.log(e)
  }
}
