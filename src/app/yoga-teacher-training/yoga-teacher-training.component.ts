import { Component, OnInit } from '@angular/core';
import { Program } from '../core/domain/Program';
import { VYService } from '../core/services/vy-service';

@Component({
  selector: 'app-yoga-teacher-training',
  templateUrl: './yoga-teacher-training.component.html',
  styleUrls: ['./yoga-teacher-training.component.css'],
  providers: [VYService]
})
export class YogaTeacherTrainingComponent implements OnInit {

  program: Program = new Program();

  constructor(private vyService: VYService) { }


  ngOnInit(): void {
    this.vyService.getYtt().then(data => this.program = data[0]);
  }

}
