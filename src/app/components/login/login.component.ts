import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  isLoggedIn: boolean = false;

  login(): void {
    console.log(`Username: ${this.email}`);
  }

  onLogin(): void {
    this.isLoggedIn = true;
  }

  onLogout(): void {
    this.isLoggedIn = false;
  }
}
