import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = this.fb.group({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit():void {
    console.log(this.registerForm.controls["email"].value);
    console.log(this.registerForm.controls["password"].value);
  }
}
