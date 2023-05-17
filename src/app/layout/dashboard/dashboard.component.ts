import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/shared/services/data-communication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectV: string = "";
  selectedMain: boolean = false;
  data: any[] = [
    { id: 1, value: 'ABC' },
    { id: 2, value: 'XYZ' },
    { id: 3, value: 'TEST' },
    { id: 4, value: 'TEST2' },
    { id: 5, value: 'Ahmedabad' },
  ];
  selectedValue: any;

  constructor(private dataCommunicationService: DataCommunicationService) { }

  ngOnInit(): void {
    this.dataCommunicationService.selectedSsv$.subscribe(data => {
      if (data) {
        this.selectedValue = JSON.parse(data);
      }
    });
  }

  dropdownChange(event: any) {
    const selectedSsv = JSON.stringify(this.selectedValue);
    localStorage.setItem('selectedSsv', selectedSsv);
    this.dataCommunicationService.selectedSsv$.next(selectedSsv);
  }

  selectedVarg(val: any) {
    if (val.length) {
      localStorage.setItem('selectedSsv', val);
      this.selectedMain = true;
      console.log('inside if')
    } else {
      if (localStorage.getItem('selectedSsv')) {
        localStorage['clearItem']('selectedSsv');
      }
    }
  }
}
