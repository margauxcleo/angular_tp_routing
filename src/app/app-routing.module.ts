import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ContactComponent } from './composants/contact/contact.component';
import { RessourcesComponent } from './composants/ressources/ressources.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ressources', component: RessourcesComponent },

  { path: 'cours', loadChildren: './cours/cours.module#CoursModule'},

  { path: '', redirectTo: '/accueil', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
