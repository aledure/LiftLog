import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Routine } from '../../shared/models/routine.model';
import { Lift } from 'src/app/shared/models/lift.model';

@Component({
  selector: 'app-create-routine',
  templateUrl: './create-routine.component.html',
  styleUrls: ['./create-routine.component.scss'],
})
export class CreateRoutineComponent {
  lifts: Lift[] = [];

  constructor(
    private apiService: ApiService,
    private lift: Lift,
    private routine: Routine
  ) {}
}
