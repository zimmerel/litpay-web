import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error if email is empty', async () => {
    throw new Error('todo bg');
  });

  it('should display error if email is invalid', () => {
    throw new Error('todo bg');
  });

  it('should not display error if email is valid', () => {
    throw new Error('todo bg');
  });

  it('should display error if password is empty', () => {
    throw new Error('todo bg');
  });

  it('should display error if password is valid', () => {
    throw new Error('todo bg');
  });

  it('should disable login button if loginForm is invalid', () => {
    throw new Error('todo bg');
  });

  it('should enable login button if loginForm is valid', () => {
    throw new Error('todo bg');
  });
});
