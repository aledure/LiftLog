import { Lift } from './lift.model';

export class Routine {
  name: string;
  lifts: Lift[];
  description: string;
  restDuration: number;

  constructor(
    name: string,
    lifts: Lift[],
    description: string,
    restDuration: number
  ) {
    this.name = name;
    this.lifts = lifts;
    this.description = description;
    this.restDuration = restDuration;
  }
}
