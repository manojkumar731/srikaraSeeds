import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(public router: Router) {

  }

  ngOnInit(): void {

  }

  ngDoCheck() {
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/");
  }

}
