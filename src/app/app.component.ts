import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lift-log';

  constructor(private apiService: ApiService) {
    this.apiService.getAllLifts().subscribe((data) => {
      console.log(data);
    });
  }
}
