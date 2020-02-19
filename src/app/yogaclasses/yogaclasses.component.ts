import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { Calendar } from '@fullcalendar/core';

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




    // Working but not needed for this website.
    // document.addEventListener('DOMContentLoaded', function() {
    //   let calendarEl: HTMLElement = document.getElementById('calendar')!;
    
    //   let calendar = new Calendar(calendarEl, {
    //     plugins: [ dayGridPlugin, interactionPlugin],
    //     events:  [
    //       {
    //           "title": "8:00 AM to 9:30 Am",
    //           "start": "2020-01-01T08:00:00",
    //           "end": "2020-01-01T09:30:00"
    //       }],
    //     eventClick: function(event) {
    //       console.log(event.event._def.title);
    //      alert(event.event._def.title);
    //     },
    //     dateClick: function(info) {
    //       alert('Clicked on: ' + info.dateStr);
    //       console.log(info);
    //     }
    //     // options here
    //   });
    
    //   calendar.render();
      
    // });




  }


}
