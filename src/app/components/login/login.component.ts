import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('error') errorText: ElementRef;
  username: String;
  password: String;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    this.authservice.authenticateUser(user).subscribe(data => { //getting back observable (like a promise but keeps going instead of fail or pass)
      if(data.success) {
        this.authservice.storeUserData(data.token, data.user);
        this.router.navigate(['/profile'])
      }
      else {
        this.errorText.nativeElement.innerText = data.msg;
        this.errorText.nativeElement.style.display = "block";
      }
    });

  }
}
