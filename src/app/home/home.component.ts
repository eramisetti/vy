import { Component, OnInit } from '@angular/core';
import { Program } from '../core/domain/Program';
import { VYService } from '../core/services/vy-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[VYService]
})
export class HomeComponent implements OnInit {

  announcements: Program[] = [];

  constructor(private vyService: VYService) { }

  ngOnInit(): void {

    this.vyService.getAnnouncements().then(data => {
      this.announcements = data;
    });

  }

}
