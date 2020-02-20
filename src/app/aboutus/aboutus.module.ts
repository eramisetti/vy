import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { AboutusRoutesModule } from './aboutus.routing';
@NgModule({
  imports: [
    CommonModule,
    AboutusRoutesModule
  ],
  declarations: [AboutusComponent],
  exports: [
    AboutusComponent
  ]  
})
export class AboutusModule { }
  