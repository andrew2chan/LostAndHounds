import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navwrap') navbar: ElementRef;
  title: string = 'LostAndHounds';

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  }

  onLogout() {
    this.authservice.logout();
    console.log("Logged out.");
    this.router.navigate(['']);
    return false;
  }

  changeBackground(e) {
    if(e.target.innerHTML == "Map") {
      this.navbar.nativeElement.style.backgroundColor = "black";
    }
    else {
      this.navbar.nativeElement.style.backgroundColor = "#fafafa";
    }

  }
}
