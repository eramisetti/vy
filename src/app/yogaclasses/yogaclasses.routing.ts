import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YogaclassesComponent } from './yogaclasses.component';

const routes: Routes = [
  
    {
        path: 'yogaclasses',
        component: YogaclassesComponent
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
export class YogaclassesRoutesModule { }

