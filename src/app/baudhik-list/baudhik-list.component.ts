import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-baudhik-list',
  templateUrl: './baudhik-list.component.html',
  styleUrls: ['./baudhik-list.component.scss']
})
export class BaudhikListComponent implements OnInit {
  isVisible:boolean= false;
baudhik:any = {
  subject:'',
  speaker:'',
  date:'',
  link:'',
  geet:'',
  av:''
};
 dataList:any = [];
  constructor(private http:HttpClient){

  }
 ngOnInit():void{
   this.dataList = [
    {date:'08/05/2023',subject:'Udghatan Satr', category:'All', speaker:'Swamiji',geet:'', Amrutvachan:'', link:'' },
    {date:'09/05/2023',subject:'', category:'All', speaker:'Swamiji',geet:'', Amrutvachan:'', link:'' },
    {date:'08/05/2023',subject:'Udghatan Satr', category:'All', speaker:'Swamiji',geet:'', Amrutvachan:'', link:'' },
    {date:'08/05/2023',subject:'Udghatan Satr', category:'All', speaker:'Swamiji',geet:'', Amrutvachan:'', link:'' },
    {date:'08/05/2023',subject:'Udghatan Satr', category:'All', speaker:'Swamiji',geet:'', Amrutvachan:'', link:'' },]
 }
 addRecord(rec:any){
   console.log(rec.value)
   this.dataList.push(rec.value);
   this.isVisible = false;
 }
 showDetails(data:any){
   window.open(data.link)
 }


}
