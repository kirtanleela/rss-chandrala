import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  constructor() { }

  selectedSsv$ = new BehaviorSubject<any>({});

}
