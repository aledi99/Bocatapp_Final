import * as Screenfull from 'screenfull';

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output()
  toggleSidenav = new EventEmitter<void>();
  @Output()
  toggleNotificationSidenav = new EventEmitter<void>();

  constructor() {}

  fullScreenToggle(): void {
    if (Screenfull.isEnabled) {
      Screenfull.toggle();
    }
  }

  showAdmin() {
    var rol = window.sessionStorage.getItem('rol');

    if(rol == 'ADMIN') {
      return true;
    } else {
      return false;
    }
  }
}
