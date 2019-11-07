import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './instructor.component';
import { InstructorRoutesModule } from './instructor.routing';

@NgModule({
  imports: [
    CommonModule,
    InstructorRoutesModule
  ],
  declarations: [InstructorComponent],
  exports: [
    InstructorComponent
  ]  
})
export class InstructorModule { }
  