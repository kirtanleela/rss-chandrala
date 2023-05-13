import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BaudhikListComponent } from '../baudhik-list/baudhik-list.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PrabandhakComponent } from '../prabandhak/prabandhak.component';

const routes: Routes = [

  // {path:'', redirectTo:'/dashboard', component: DashboardComponent, pathMatch:'full'},
   {path:'dashboard',
   component: DashboardComponent},
  {path:'baudhik',
  component: BaudhikListComponent},
  {path:'prabandhak',
  component: PrabandhakComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }