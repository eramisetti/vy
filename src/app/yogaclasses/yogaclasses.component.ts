import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-yogaclasses',
  templateUrl: './yogaclasses.component.html',
  styleUrls: ['./yogaclasses.component.css']
})
export class YogaclassesComponent implements OnInit {

  selectedService:string = '';
  yes:boolean = false;
  events: any[];
  options: any;
  constructor() { }

  ngOnInit() {

  }


}
