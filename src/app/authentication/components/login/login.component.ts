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
  hidePassword = true;

  public registerForm: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    const emailFormControl = this.registerForm.controls['email'];
    return emailFormControl.hasError('required') ? 'You must enter a value' :
      emailFormControl.hasError('email') ? 'Not a valid email' :
        '';
  }
  getPasswordErrorMessage() {
    return this.registerForm.controls['password']
      .hasError('required') ? 'You must enter a value' : '';
  }

  onSubmit(): void {
    console.log(this.registerForm.controls['email'].value);
    console.log(this.registerForm.controls['password'].value);
  }
}
