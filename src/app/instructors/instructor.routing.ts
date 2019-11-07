import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorComponent } from './instructor.component';

const routes: Routes = [
  
    {
        path: 'home',
        component: InstructorComponent
    }
];


@NgModule({
   imports: [
      RouterModule.forRoot(routes,  {useHash: true})
   ],
   exports: [
      RouterModule
   ],
   declarations: [
   ]
})
export class InstructorRoutesModule { }

