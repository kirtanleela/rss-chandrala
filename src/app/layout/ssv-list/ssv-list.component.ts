import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssv-list',
  templateUrl: './ssv-list.component.html',
  styleUrls: ['./ssv-list.component.css']
})
export class SsvListComponent implements OnInit{
  selectV:string="";
 constructor(){}
 ngOnInit(): void {
   
 }
 selectedVarg(val:any){
    console.log(val)
 }
}
