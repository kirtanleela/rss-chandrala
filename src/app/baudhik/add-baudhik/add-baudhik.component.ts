import { Component, EventEmitter, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DataCommunicationService } from 'src/app/shared/services/data-communication.service';

@Component({
  selector: 'add-baudhik',
  templateUrl: './add-baudhik.component.html',
  styleUrls: ['./add-baudhik.component.css']
})
export class AddBaudhikComponent {
  @Output() newRecordEvent = new EventEmitter<any>();

  baudhik:any = {
    subject:'',
    speaker:'',
    date:'',
    link:'',
    geet:'',
    av:''
  };

  selectedSsv: string = '';

  constructor(private primengConfig: PrimeNGConfig, private dataCommunicationService: DataCommunicationService) {}
  ngOnInit(){
    this.primengConfig.ripple = true;
    this.dataCommunicationService.selectedSsv$.subscribe(data => {
      if (data) {
        this.selectedSsv = JSON.parse(data)?.value;
      }
    });
  }
  
   addRecord(rec:any){
     console.log(rec.value);
     this.displayBasic=false;
     this.newRecordEvent.emit(rec);
    // this.dataList.push(rec.value);
   }
   showDetails(data:any){
     window.open(data.link)
   }
  displayModal: boolean = true;

    displayBasic: boolean = false;

    displayBasic2: boolean = true;

    displayMaximizable: boolean = true;

    displayPosition: boolean = true;

    position: string = '';

    showModalDialog() {
        this.displayModal = true;

    }

    showBasicDialog() {
        this.displayBasic = true;
  
    }

    // showBasicDialog2() {
    //     this.displayBasic2 = true;
    // }

    // showMaximizableDialog() {
    //     this.displayMaximizable = true;
    // }

    // showPositionDialog(position: string) {
    //     this.position = position;
    //     this.displayPosition = true;
    // }
}
