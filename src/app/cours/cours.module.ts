import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammationComponent } from './programmation/programmation.component';
import { WebComponent } from './web/web.component';
import { CoursRoutingModule } from './cours-routing.module';



@NgModule({
  declarations: [ProgrammationComponent, WebComponent],
  imports: [
    CommonModule,
    CoursRoutingModule
  ]
})
export class CoursModule { }
