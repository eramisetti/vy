import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogaclassesComponent } from './yogaclasses.component';
import { YogaclassesRoutesModule } from './yogaclasses.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    YogaclassesRoutesModule,
    NgxPayPalModule
  ],
  declarations: [YogaclassesComponent],
  exports: [
    YogaclassesComponent
  ]  
})
export class YogaclassesModule { }
  