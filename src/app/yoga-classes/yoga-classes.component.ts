import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga-classes',
  templateUrl: './yoga-classes.component.html',
  styleUrls: ['./yoga-classes.component.css']
})
export class YogaClassesComponent implements OnInit {

  selectedService:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
