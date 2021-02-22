import { Component, OnInit } from '@angular/core';
import { Program } from '../core/domain/Program';
import { VYService } from '../core/services/vy-service';

@Component({
  selector: 'app-yoga-library',
  templateUrl: './yoga-library.component.html',
  styleUrls: ['./yoga-library.component.css'],
  providers: [VYService]
})
export class YogaLibraryComponent implements OnInit {

  programs: Program[] = [];

  constructor(private vyService: VYService){}

  ngOnInit(): void {
    this.vyService.getPastPrograms().then(data => this.programs = data);
  }

}
