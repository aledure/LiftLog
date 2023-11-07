import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  @Output() mouseLeave = new EventEmitter<void>();
  loggedIn = false;

  closeSidebar() {
    this.mouseLeave.emit();
  }
}
