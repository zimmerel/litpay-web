import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  describe('isAuthenticated', () => {
    it('should return true if local storage contains a valid token', () => {
      throw new Error('todo bg');
    });

    it('should return true if local storage does not contain a valid token', () => {
      throw new Error('todo bg');
    });
  });
});
