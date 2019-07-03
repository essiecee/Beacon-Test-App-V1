import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-session', component: SessionComponent },
  { path: 'app-form', component: FormComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    HomeComponent,
    FormComponent
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
