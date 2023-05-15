import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { RoutingModule } from './routing/routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PrabandhakComponent } from './prabandhak/prabandhak.component';
import { BaudhikListComponent } from './baudhik/baudhik-list/baudhik-list.component';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AnimateModule } from 'primeng/animate';
import { DialogModule } from 'primeng/dialog';
import { BaudhikModule } from './baudhik/baudhik.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
    PrabandhakComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    AgGridModule,
    NgxDatatableModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    AnimateModule,
    DialogModule,
    BaudhikModule,
    LayoutModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
