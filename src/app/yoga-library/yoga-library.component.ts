import { Component, OnInit } from '@angular/core';
import { Program } from '../core/domain/Program';
import { ProgramService } from '../core/services/programs-service';

@Component({
  selector: 'app-yoga-library',
  templateUrl: './yoga-library.component.html',
  styleUrls: ['./yoga-library.component.css'],
  providers: [ProgramService]
})
export class YogaLibraryComponent implements OnInit {

  programs: Program[];

  constructor(private programService: ProgramService){}
  
  ngOnInit(): void {
    this.programService.getPastPrograms().then(data => this.programs = data);
  }

}
