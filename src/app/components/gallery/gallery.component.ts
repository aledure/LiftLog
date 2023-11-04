import { Component } from '@angular/core';
import { Lift } from 'src/app/shared/models/lift.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  lifts: Lift[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchLiftsData();
  }

  fetchLiftsData() {
    this.apiService.getAllLifts().subscribe(
      (data) => {
        this.lifts = data; // Store the fetched data in the property
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
