import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgrammationComponent } from './programmation/programmation.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  { path: 'programmation', component: ProgrammationComponent },
  { path: 'web', component: WebComponent },
  { path: '', component: ProgrammationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
