import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'layout'
    
  },
  {
    path:'layout',
    loadChildren:()=>import('../layout/layout.module').then((m)=>m.LayoutModule)
  },
  {
    path:'baudhik',
    loadChildren:()=>import('../baudhik/baudhik.module').then((m)=>m.BaudhikModule)
  }
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }