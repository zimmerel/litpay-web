/**
 * This component is unused until we change our authentication method
 */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup,
  FormControl, Validators,
} from '@angular/forms';
import { AuthenticationService } from 'src/app/common/services/authentication/authentication.service';

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

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this._emailControl,
      password: this._passwordControl
    });
  }

  toggleShowPassword(): void {
    this._showPassword = !this._showPassword;
  }

  onSubmit(): void {
    console.log(this.loginForm.controls['email'].value);
    console.log(this.loginForm.controls['password'].value);
  }
}
