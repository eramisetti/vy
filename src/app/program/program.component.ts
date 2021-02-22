import { Component, OnInit } from '@angular/core';
import { Program } from '../core/domain/Program';
import { VYService } from '../core/services/vy-service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
  providers: [VYService]
})
export class ProgramComponent implements OnInit {

  program: Program = new Program();

  constructor(private vyService: VYService) { }

  ngOnInit(): void {
    this.vyService.getNewProgram().then(data => this.program = data[0]);
  }

}
