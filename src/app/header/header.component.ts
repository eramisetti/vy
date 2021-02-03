import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }



  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label:'Home',
              icon:'pi pi-fw pi-home',
              routerLink: '/home'
          },
          {
              label:'Yoga Classes',
              icon:'pi pi-fw pi-calendar',
              routerLink: '/classes'
           
          },
          {
              label:'Yoga Teacher Training',
              icon:'pi pi-fw pi-calendar',
              routerLink: '/ytt'
          },
          {
              label:'Teachers',
              icon:'pi pi-fw pi-users',
              routerLink: '/teachers'
          },
          {
              label:'Gallery',
              icon:'pi pi-fw pi-images',
              routerLink: '/gallery'
          },
          {
            label:'About us',
            icon:'pi pi-fw pi-info',
            routerLink: '/aboutus'
          },
        //   {
        //     label:'Program',
        //     icon:'pi pi-fw pi-star',
        //     routerLink: '/program'
        //   }
      ];
  }

}
