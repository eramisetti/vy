import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorcourseComponent } from './instructorcourse.component';
import { InstructorcourseRoutesModule } from './instructorcourse.routing';

@NgModule({
  imports: [
    CommonModule,
    InstructorcourseRoutesModule
  ],
  declarations: [InstructorcourseComponent],
  exports: [
    InstructorcourseComponent
  ]  
})
export class InstructorcourseModule { }
  