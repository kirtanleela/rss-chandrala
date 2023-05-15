import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  selectedMain:boolean = false;
  ngOnInit(): void {
    if(localStorage.getItem('selectedSsv')){
      this.selectedMain = true;
    }
  }
}
