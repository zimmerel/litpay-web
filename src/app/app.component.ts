import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './common/services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'litpay-web';

  constructor(public auth: AuthenticationService, router: Router) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (localStorage.getItem(this.auth.localStorageName) === 'true') {
      this.auth.renewTokens();
    }
  }
}
