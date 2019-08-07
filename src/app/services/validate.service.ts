import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.firstName == undefined || user.lastName == undefined || user.username == undefined || user.password == undefined || user.email == undefined || user.firstName == "" || user.lastName == "" || user.username == "" || user.password == "" || user.email == "") {
      return true; //fields not filled in
    }
    else {
      return false; //all fields filled in
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePhone(phone) {
    const re = /^d{10}$/
    return re.test(phone);
  }
}
