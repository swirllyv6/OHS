import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  checkAuth() {
    if( localStorage.getItem('token') != null)
      return true
    else
      return false
  }

  login() {
    localStorage.setItem('token', 'qwertyuiopqwertyuiop')
    return true
  }

  logout() {
    this.loggedIn = false;
  }

  constructor() { }
}
