import { Component, OnInit } from '@angular/core';
import { YogaClasses } from '../core/domain/YogaClasses';
import { VYService } from '../core/services/vy-service';

@Component({
  selector: 'app-yoga-classes',
  templateUrl: './yoga-classes.component.html',
  styleUrls: ['./yoga-classes.component.css'],
  providers: [VYService]
})
export class YogaClassesComponent implements OnInit {

  selectedService:string = '';
  yogaClasses: YogaClasses = new YogaClasses();

  constructor(private vyService: VYService) { }

  ngOnInit(): void {
    this.vyService.getYogaClasses().then(data=> this.yogaClasses = data[0]);
  }

}
