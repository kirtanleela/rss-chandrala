import { NgModule } from '@angular/core';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AuthGuardService
  ]
})
export class CoreModule { }
