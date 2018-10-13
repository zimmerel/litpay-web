import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup,
  FormControl, Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  get disableLoginButton(): boolean {
    return !!this.loginForm.errors;
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

  constructor(private fb: FormBuilder) { }

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
