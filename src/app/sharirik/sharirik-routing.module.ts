import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharirikListComponent } from './sharirik-list/sharirik-list.component';

const routes: Routes = [
  {
    path: '',
    component: SharirikListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharirikRoutingModule { }
