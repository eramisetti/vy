import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  onLinkClick() {
    console.log("yes");
    document.getElementById("collapseBtn").click();
  }
}
