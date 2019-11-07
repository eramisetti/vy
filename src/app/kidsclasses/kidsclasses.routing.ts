import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KidsclassesComponent } from './kidsclasses.component';

const routes: Routes = [
  
    {
        path: 'home',
        component: KidsclassesComponent
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
export class KidsclassesRoutesModule { }

