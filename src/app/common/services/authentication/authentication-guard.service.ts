import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(private _authenticationService: AuthenticationService, private _router: Router) { }

  canActivate(): boolean {
    const isAuthenticated = this._authenticationService.isAuthenticated();

    if (!isAuthenticated) {
      this._router.navigate(['/login']);
    }

    return isAuthenticated;
  }
}
