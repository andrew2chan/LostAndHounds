import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { } //inject

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json'); //add a content type json which is what will be returned
    if (environment.production) {
      return this.http.post('users/register', user, {headers: headers}).map(res => res.json()); //send user to backend
    }
    else {
      return this.http.post('http://localhost:8080/users/register', user, {headers: headers}).map(res => res.json()); //send user to backend
    }
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json'); //add a content type json which is what will be returned
    if (environment.production) {
      return this.http.post('users/auth', user, {headers: headers}).map(res => res.json()); //send user to backend
    }
    else {
      return this.http.post('http://localhost:8080/users/auth', user, {headers: headers}).map(res => res.json()); //send user to backend
    }
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken); //send req with the token
    headers.append('Content-Type','application/json'); //add a content type json which is what will be returned
    if (environment.production) {
      return this.http.get('users/profile', {headers: headers}).map(res => res.json()); //send user to backend
    }
    else {
      return this.http.get('http://localhost:8080/users/profile', {headers: headers}).map(res => res.json()); //send user to backend
    }
  }

  loggedIn() {
    return tokenNotExpired();
  }

  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token); //angular auto looks for token so we just use that
    localStorage.setItem('user', JSON.stringify(user)) //localstorage can only store string (no objects) so we will JSON.parse back when we need it
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
