import { Injectable } from '@angular/core';
import { Lift } from '../models/lift.model';
import { Routine } from '../models/routine.model';

@Injectable({ providedIn: 'root' })
export class RoutineManagerService {
  routines: Routine[] = [];

  constructor(private lift: Lift, private routine: Routine) {}

  createRoutine(name: string, description: string, restDuration: number) {
    this.routine.name = name;
    this.routine.description = description;
    this.routine.restDuration = restDuration;
  }

  addLift(lift: Lift) {
    this.routine.lifts.push(lift);
  }

  removeLift(lift: Lift) {
    const index = this.routine.lifts.indexOf(lift);
    this.routine.lifts.splice(index, 1);
  }

  editRoutine(name: string, description: string, restDuration: number) {
    this.routine.name = name;
    this.routine.description = description;
    this.routine.restDuration = restDuration;
  }

  getRoutine() {
    return this.routine;
  }
}
