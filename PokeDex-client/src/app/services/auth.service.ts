import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:5005/api/auth';
  constructor(private http: HttpClient, private router: Router) { }

  signInUser(user: any) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  signUpUser(user: any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  // getToken() {
  //   return localStorage.getItem('token');
  // }

}

