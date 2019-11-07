import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorcourseComponent } from './instructorcourse.component';

const routes: Routes = [
  
    {
        path: 'home',
        component: InstructorcourseComponent
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
export class InstructorcourseRoutesModule { }

