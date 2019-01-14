import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../common/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthenticationService, public router: Router) { }

  isLoggedIn() {
    return this.auth.isAuthenticated();
  }

  ngOnInit() { }

  testLink() {
    this.router.navigate(['/login']);
  }
}
