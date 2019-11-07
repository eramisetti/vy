import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutesModule } from './gallery.routing';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutesModule
  ],
  declarations: [GalleryComponent],
  exports: [
    GalleryComponent
  ]  
})
export class GalleryModule { }
  