import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as moment from 'moment';
import { WebAuth, Auth0Error, Auth0DecodedHash} from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public localStorageName = 'isLoggedIn';

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  private auth = new WebAuth({
    clientID: 'z4bV4lQG24mmJ56g8YsoIUz8OYLk3k7A',
    domain: 'litpay.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/login/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login() {
    this.auth.authorize();
  }

  public embedLogin(
    email: string,
    password: string,
    cb: (error: Auth0Error, result) => void
  ): void {
    this.auth.login({
      realm: 'Username-Password-Authentication',
      username: email,
      password: password
    }, cb);
  }

  public logout(): void {
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;
    localStorage.removeItem(this.localStorageName);
    this.router.navigate(['/']);
  }

  public localLogin(authResult: Auth0DecodedHash): void {
    localStorage.setItem(this.localStorageName, 'true');
    const expiresAt = (authResult.expiresIn * 1000) + moment().valueOf();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public handleAuthentication(): void {
    this.auth.parseHash((err: Auth0Error, authResult: Auth0DecodedHash) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['']);
      } else if (err) {
        this.router.navigate(['']);
      }
    });
  }

  public renewTokens(): void {
    this.auth.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.errorDescription}).`);
        this.logout();
      }
    });
  }

  public isAuthenticated(): boolean {
    return moment().valueOf() < this._expiresAt;
  }

}
