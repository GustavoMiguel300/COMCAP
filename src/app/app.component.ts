import { Component } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COMCAP';
  opened = true;

  toggleSidebar(){
    this.opened = !this.opened
  }



}
