import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/guards/auth-guard.service';
import { LoginComponent } from '../login/login.component';
import { PortalComponent } from '../shared/components/portal/portal.component';
import { appRoutingURL } from '../shared/configs/app-routing-url.config';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: appRoutingURL.DASHBOARD_PAGE,
    canActivate: [AuthGuardService],
    loadChildren: () => import('../layout/layout.module').then((m) => m.LayoutModule)
  },
  {
    path: appRoutingURL.PORTAL_PAGE,
    component: PortalComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: appRoutingURL.NOT_FOUND
      },
      {
        path: appRoutingURL.DASHBOARD_PAGE,
        loadChildren: () => import('../layout/layout.module').then((m) => m.LayoutModule)
      },
      {
        path: appRoutingURL.BAUDHIK_PAGE,
        loadChildren: () => import('../baudhik/baudhik.module').then((m) => m.BaudhikModule)
      },
      {
        path: appRoutingURL.PRABANDHAK_PAGE,
        loadChildren: () => import('../prabandhak/prabandhak.module').then((m) => m.PrabandhakModule)
      },
      {
        path: appRoutingURL.SHARIRIK_PAGE,
        loadChildren: () => import('../sharirik/sharirik.module').then((m) => m.SharirikModule)
      }
    ]
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }