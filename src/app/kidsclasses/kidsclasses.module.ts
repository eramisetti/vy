import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsclassesComponent } from './kidsclasses.component';
import { KidsclassesRoutesModule } from './kidsclasses.routing';

@NgModule({
  imports: [
    CommonModule,
    KidsclassesRoutesModule
  ],
  declarations: [KidsclassesComponent],
  exports: [
    KidsclassesComponent
  ]  
})
export class KidsclassesModule { }
  