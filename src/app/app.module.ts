import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { MenubarModule} from 'primeng/menubar';
import { YogaClassesComponent } from './yoga-classes/yoga-classes.component';
import { YogaTeacherTrainingComponent } from './yoga-teacher-training/yoga-teacher-training.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ProgramComponent } from './program/program.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        YogaClassesComponent,
        YogaTeacherTrainingComponent,
        GalleryComponent,
        AboutUsComponent,
        TeachersComponent,
        ProgramComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        MenubarModule
    ],
    providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
