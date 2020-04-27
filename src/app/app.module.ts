import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { YogaclassesModule } from './yogaclasses/yogaclasses.module';
import { KidsclassesModule } from './kidsclasses/kidsclasses.module';
import { InstructorcourseModule } from './instructorcourse/instructorcourse.module';
import { InstructorModule } from './instructors/instructor.module';
import { GalleryModule } from './gallery/gallery.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { DirectLinkYicComponent } from './direct-link-yic/direct-link-yic.component';
import { HomeRoutesModule } from './home/home.routing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
   declarations: [
      AppComponent,
      DirectLinkYicComponent,
   ],
   imports: [
      CommonModule,
      RouterModule,
      BrowserModule,
      AppRoutingModule,
      HomeRoutesModule,
      HomeModule,
      YogaclassesModule,
      KidsclassesModule,
      InstructorcourseModule,
      InstructorModule,
      GalleryModule,
      AboutusModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
