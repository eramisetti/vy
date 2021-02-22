import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProgramComponent } from './program/program.component';
import { TeachersComponent } from './teachers/teachers.component';
import { YogaClassesComponent } from './yoga-classes/yoga-classes.component';
import { YogaLibraryComponent } from './yoga-library/yoga-library.component';
import { YogaTeacherTrainingComponent } from './yoga-teacher-training/yoga-teacher-training.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'classes', component: YogaClassesComponent},
  { path: 'ytt', component: YogaTeacherTrainingComponent },
  { path: 'teachers', component: TeachersComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'specialProgram', component: ProgramComponent},
  { path: 'library', component: YogaLibraryComponent},
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
