import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  
    {
        path: 'home',
        component: GalleryComponent
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
export class GalleryRoutesModule { }

