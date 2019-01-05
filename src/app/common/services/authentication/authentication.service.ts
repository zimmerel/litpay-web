import { Injectable } from '@angular/core';
import { LoginResult } from './login-result';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  async login(username: string, password: string): Promise<LoginResult> {
    if(!username) {
      throw new Error('Invalid username!');
    }

    if(!password) {
      throw new Error('Invalid password!');
    }

    localStorage.setItem(TOKEN_KEY, 'fake-token');

    return Promise.resolve(LoginResult.Success);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }
}
