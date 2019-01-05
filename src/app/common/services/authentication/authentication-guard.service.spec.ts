import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationGuardService } from './authentication-guard.service';

describe('AuthenticationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuardService]
    });
  });

  it('should be created', inject([AuthenticationGuardService], (service: AuthenticationGuardService) => {
    expect(service).toBeTruthy();
  }));

  describe('isAuthenticated', () => {
    it('should return true if user is authenticated', () => {
      throw new Error('todo bg');
    });

    it('should return false if user is not authenticated', () => {
      throw new Error('todo bg');
    });

    it('should navigate to the login page if user is not authenticated', () => {
      throw new Error('todo bg');
    })
  });
});
