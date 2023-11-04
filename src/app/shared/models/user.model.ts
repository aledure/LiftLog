import { Routine } from './routine.model';

export class User {
  username: string;
  password: string;
  email: string;
  token: string;
  firstName: string;
  lastName: string;
  routines: Routine[];
  bio: string;

  constructor(
    username: string,
    password: string,
    email: string,
    token: string,
    firstName: string,
    lastName: string,
    routines: Routine[],
    bio: string
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.token = token;
    this.firstName = firstName;
    this.lastName = lastName;
    this.routines = routines;
    this.bio = bio;
  }
}
