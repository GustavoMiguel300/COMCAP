import { Component } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  opened = false;
  hide:boolean = false;


  toggleSidebar(){
    this.opened = !this.opened
  }
  storeBadgeState(){
    localStorage.setItem('hide', JSON.stringify(this.hide))
  }

}
