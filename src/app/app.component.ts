import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COMCAP';

  opened = false;


  toggleSidebar(){
    this.opened = !this.opened
  }
}
