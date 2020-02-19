import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { AboutusRoutesModule } from './aboutus.routing';
import {FullCalendarModule} from 'primeng/fullcalendar';
@NgModule({
  imports: [
    CommonModule,
    AboutusRoutesModule,
    FullCalendarModule
  ],
  declarations: [AboutusComponent],
  exports: [
    AboutusComponent
  ]  
})
export class AboutusModule { }
  