import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectLinkYicComponent } from './direct-link-yic/direct-link-yic.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'directlink', component: DirectLinkYicComponent}
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
export class AppRoutingModule { }
