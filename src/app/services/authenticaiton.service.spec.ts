import { TestBed } from '@angular/core/testing';

import { AuthenticaitonService } from './authenticaiton.service';

describe('AuthenticaitonService', () => {
  let service: AuthenticaitonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticaitonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
