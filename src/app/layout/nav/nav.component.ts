import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { DataCommunicationService } from 'src/app/shared/services/data-communication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  selectedMain: boolean = false;
  selectedSsv: boolean = false;

  constructor(private authService: AuthService, private dataCommunicationService: DataCommunicationService) { }

  ngOnInit(): void {
    if (localStorage.getItem('selectedSsv')) {
      this.selectedMain = true;
    }
    this.dataCommunicationService.selectedSsv$.subscribe(data => {
      if(data) {
        data = JSON.parse(data);
        this.selectedSsv = data?.value;
      }
    });
  }

  logout() {
    this.authService.SignOut();
  }
}
