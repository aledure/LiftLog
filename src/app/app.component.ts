import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lift-log';
  sidebarOpen = false;

  constructor(private apiService: ApiService) {
    this.apiService.getAllLifts().subscribe((data) => {
      console.log(data);
    });
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  closeSidebar() {
    this.sidebarOpen = false;
  }
}
