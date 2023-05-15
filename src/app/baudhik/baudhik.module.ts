import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaudhikRoutingModule } from './baudhik-routing.module';

import { AddBaudhikComponent } from './add-baudhik/add-baudhik.component';
import { BaudhikListComponent } from './baudhik-list/baudhik-list.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AddBaudhikComponent,
    BaudhikListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaudhikRoutingModule,
    DialogModule,
    ButtonModule
  ]
})
export class BaudhikModule { }
