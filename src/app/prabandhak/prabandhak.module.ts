import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrabandhakListComponent } from './prabandhak-list/prabandhak-list.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../routing/routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AnimateModule } from 'primeng/animate';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    AgGridModule,
    NgxDatatableModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    AnimateModule,
    DialogModule
  ],
  declarations: [PrabandhakListComponent]
})
export class PrabandhakModule { }
