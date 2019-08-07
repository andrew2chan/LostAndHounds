import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('error') error: ElementRef;
  firstName: String;
  lastName: String;
  username: String;
  password: String;
  email: String;
  confirmEmail: String;

  constructor(private validateService : ValidateService, private authservice : AuthService, private router : Router) { } //need to inject everytime you use a service

  ngOnInit() {

  }

  compareEmails() { //makes sure that emails match
    if(this.email !== this.confirmEmail) {
      this.error.nativeElement.innerText = "Please make sure that the two emails entered match.";
      this.error.nativeElement.style.display = "block";
    }
    else {
      this.error.nativeElement.style.display = "none";
    }
  }

  onRegisterSubmit() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
      email: this.email,
    }

    if(this.validateService.validateRegister(user)) {
      this.error.nativeElement.innerText = "Please fill in all the fields.";
      this.error.nativeElement.style.display = "block";
      return false;
    }

    if(!this.validateService.validateEmail(this.email) || !this.validateService.validateEmail(this.confirmEmail)) {
      this.error.nativeElement.innerText = "Please enter a valid email in both fields.";
      this.error.nativeElement.style.display = "block";
      return false;
    }

    this.authservice.registerUser(user).subscribe((data) => {
      if(data.success) {
        console.log("You are now registered.");
        this.router.navigate(['/login'])
      }
      else {
        this.error.nativeElement.innerText = data.msg;
        this.error.nativeElement.style.display = "block";
        this.router.navigate(['/register'])
      }
    }); //calls our backend register route. Uses subscribe because we made the return value an observable (continuous stream of data until data received)
  }


}
