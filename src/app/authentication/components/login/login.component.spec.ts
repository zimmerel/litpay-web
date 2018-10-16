import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let email: FormControl;
  let password: FormControl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    email = <FormControl>component.loginForm.controls['email'];
    password = <FormControl>component.loginForm.controls['password'];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('email', () => {
    it('should have error if email is empty', async () => {
      email.setValue('');
      expect(email.errors.required).toBe(true);
      expect(component.emailErrorMessage).toBeTruthy();
    });

    it('should have error if email is invalid', () => {
      email.setValue('wanker');
      expect(email.errors.email).toBe(true);
      expect(component.emailErrorMessage).toBeTruthy();
    });

    it('should not have errors if email is valid', () => {
      email.setValue('rexbutts@gmail.com');
      expect(email.errors).toBeFalsy();
      expect(component.emailErrorMessage).toBeFalsy();
    });
  });

  describe('password', () => {
    it('should have error if password is empty', () => {
      password.setValue('');
      expect(password.errors.required).toBe(true);
      expect(component.passwordErrorMessage).toBeTruthy();
    });

    it('should not have error if password is valid', () => {
      password.setValue('scotchscotchyscotchscotch');
      expect(password.errors).toBeFalsy();
      expect(component.passwordErrorMessage).toBeFalsy();
    });
  });

  describe('form', () => {
    it('should disable login button if loginForm is invalid', () => {
      email.setValue('');
      expect(component.loginForm.valid).toBe(false);
      expect(component.disableLoginButton).toBe(true);
    });

    it('should enable login button if loginForm is valid', () => {
      email.setValue('spongebob@krustykrab.com');
      password.setValue('bikinibottom');
      expect(component.loginForm.valid).toBe(true);
      expect(component.disableLoginButton).toBe(false);
    });
  });
});
