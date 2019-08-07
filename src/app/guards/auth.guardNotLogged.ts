import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';

/**
  USE THIS AS AUTHGUARD IF NOT LOGGED IN
**/

@Injectable() //says that class can be injected
export class AuthGuardNotLogged implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}

  canActivate() { //makes sure that they can't get into a route without being logged in
    if(this.authservice.loggedIn()) {
      this.router.navigate(['/main']);
    }
    else {
      return true;
    }

  }
}
