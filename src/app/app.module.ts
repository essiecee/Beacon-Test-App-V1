import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-session', component: SessionComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/app-session'},
];

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
