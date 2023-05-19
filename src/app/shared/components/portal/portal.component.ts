import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from 'src/app/core/authentication/auth.service';
import { appRoutingURL } from '../../configs/app-routing-url.config';
import { DataCommunicationService } from '../../services/data-communication.service';
import { RoutingUrlService } from '../../services/routing-url.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css'],
  providers: [RoutingUrlService],
})
export class PortalComponent implements OnInit {
  menuItems: any[] = [];
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = undefined;
  title = 'TimeOut Confirmation';
  logOutButtonText = 'LogOut';
  stayButtonText = 'Stay';
  isLoggedIn: boolean = false;
  public modalRef: any;

  @ViewChild('confirmationPopup', { static: false })
  confirmationPopup: any;

  //LoaderService is for the spinner
  constructor(
    private routingurlService: RoutingUrlService,
    private authService: AuthService,
    private dataCommunicationService: DataCommunicationService
  ) {

  }

  ngOnInit() {
    if (localStorage.getItem('isLogin')) {
      this.isLoggedIn = true;
    }
    const selectedSsv = localStorage.getItem('selectedSsv');
    if (selectedSsv) {
      this.dataCommunicationService.selectedSsv$.next(selectedSsv);
    }
    this.createMenu();
  }

  logout() {
    this.confirmationPopup.hide();
    this.authService.SignOut();
  }

  private createMenu() {
    this.menuItems = [
      {
        title: 'Dashboard',
        icon: 'nav-icon fas fa-tachometer-alt',
        redirectUrl: this.routingurlService.merge(
          appRoutingURL.PORTAL_PAGE,
          appRoutingURL.DASHBOARD_PAGE
        ),
      },
      {
        title: 'Baudhik',
        icon: 'nav-icon fas fa-pizza-slice',
        redirectUrl: this.routingurlService.merge(
          appRoutingURL.PORTAL_PAGE,
          appRoutingURL.BAUDHIK_PAGE
        ),
      },
      {
        title: 'Sharirik',
        icon: 'nav-icon fas fa-user',
        redirectUrl: this.routingurlService.merge(
          appRoutingURL.PORTAL_PAGE,
          appRoutingURL.SHARIRIK_PAGE,
        ),
      },
      {
        title: 'Report',
        icon: 'nav-icon fas fa-file',
        redirectUrl: null,
        subMenuItems: [
          {
            title: 'Rss Report',
            icon: 'nav-icon fas fa--circle-o',
            redirectUrl: this.routingurlService.merge(
              appRoutingURL.PORTAL_PAGE,
              appRoutingURL.REPORT_PAGE
            ),
          },
        ],
      },
    ];
  }
}
