import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectV:string="";
  selectedMain:boolean = false;
  constructor(){}
  ngOnInit(): void {
    
  }
  selectedVarg(val:any){
    if(val.length){
      localStorage.setItem('selectedSsv', val);
      this.selectedMain = true;
      console.log('inside if')
    } else {
      if(localStorage.getItem('selectedSsv')){
        localStorage['clearItem']('selectedSsv');
      }
      
    }
  }
}
