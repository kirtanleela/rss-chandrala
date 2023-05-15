import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    selectedMain:boolean = false;
    ngOnInit(): void {
      if(localStorage.getItem('selectedSsv')){
        this.selectedMain = true;
      }
    }
}
