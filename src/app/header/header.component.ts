import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { VYService } from '../core/services/vy-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [VYService]
})
export class HeaderComponent implements OnInit {

  constructor(private vyService: VYService) { }

  items: MenuItem[];

  ngOnInit() {
    let str = localStorage.getItem("menu");
    if (str === null || str==='undefined' || str==='' || str==undefined) {
      this.vyService.getMenu().then(data => {
        this.items = data;
        localStorage.setItem("menu", JSON.stringify(this.items));
      });
    } else {
      this.items = JSON.parse(str);
    }
  }
}
