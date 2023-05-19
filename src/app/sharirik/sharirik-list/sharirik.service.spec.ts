/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharirikService } from './sharirik.service';

describe('Service: Sharirik', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharirikService]
    });
  });

  it('should ...', inject([SharirikService], (service: SharirikService) => {
    expect(service).toBeTruthy();
  }));
});
