/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataCommunicationService } from './data-communication.service';

describe('Service: DataCommunication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCommunicationService]
    });
  });

  it('should ...', inject([DataCommunicationService], (service: DataCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
