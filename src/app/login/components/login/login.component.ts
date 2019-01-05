import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup,
  FormControl, Validators,
} from '@angular/forms';
import { AuthenticationService } from 'src/app/common/services/authentication/authentication.service';
import { LoginResult } from 'src/app/common/services/authentication/login-result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  get disableLoginButton(): boolean {
    return !this.loginForm.valid;
  }

  get emailErrorMessage(): string {
    if (this._emailControl.hasError('required')) {
      return 'Email is required';
    }

    return this._emailControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  get passwordErrorMessage(): string {
    return this._passwordControl.hasError('required')
      ? 'Password is required'
      : '';
  }

  get passwordType(): string {
    return this.showPassword
      ? 'text'
      : 'password';
  }

  get visibilityType(): string {
    return this.showPassword
      ? 'visibility_off'
      : 'visibility';
  }

  get showPassword(): boolean {
    return this._showPassword;
  }

  private _showPassword = false;
  private _emailControl = new FormControl('', [Validators.required, Validators.email]);
  private _passwordControl = new FormControl('', [Validators.required]);

  constructor(private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _router: Router) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: this._emailControl,
      password: this._passwordControl
    });
  }

  toggleShowPassword(): void {
    this._showPassword = !this._showPassword;
  }

  async onSubmit(): Promise<boolean> {
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;
    
    const result = await this._authenticationService.login(email, password);

    if (result !== LoginResult.Success) {
      // TODO show error and return
    }

    return this._router.navigate(['/dashboard']);
  }
}
