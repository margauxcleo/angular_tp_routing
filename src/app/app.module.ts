import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { RessourcesComponent } from './composants/ressources/ressources.component';
import { ContactComponent } from './composants/contact/contact.component';
import { CoursModule } from './cours/cours.module';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RessourcesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
