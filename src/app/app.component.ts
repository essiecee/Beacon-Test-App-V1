import { Component } from '@angular/core';
//import { HomeComponent } from 'home/home.component';

@Component({
  selector: 'app-root',
  template:`
    <router-outlet></router-outlet>
  `
  //'./app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beacon-Test-App-V1';
}
