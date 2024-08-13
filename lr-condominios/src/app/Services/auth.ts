import { Injectable } from '@angular/core';
import { UserService } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {
    this.isLogged = localStorage.getItem('isLogged') === 'true';
  }

  isLogged: boolean = false;

  login(email: string, password: string) {
    let findUser = this.userService.user.find(
      (user) => user.email === email && user.password === password
    );

    if (findUser) {
      localStorage.setItem('isLogged', 'true');
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    return findUser;
  }

  logout() {
    localStorage.removeItem('isLogged');
    this.isLogged = false;
  }

  isAuthenticated() {
    return this.isLogged;
  }
}
