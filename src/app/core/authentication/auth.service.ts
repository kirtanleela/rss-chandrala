import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appRoutingURL } from 'src/app/shared/configs/app-routing-url.config';
import { appSetting } from 'src/app/shared/configs/app-setting.config';
import { ApiOutput } from 'src/app/shared/models/api-output.model';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private loaderService: LoaderService
  ) {}

  isLoggedIn() {
    return localStorage.getItem('token');
  }

  login(userModel: any) {
    localStorage.setItem('token', '1234');
      localStorage.setItem(
        'isLogin', 'true'
      );
      localStorage.setItem('userid', '11');
      localStorage.setItem('userName', 'Test');
      localStorage.setItem(
        'name',
        'test'
      );
    this.router.navigate([
      appRoutingURL.PORTAL_PAGE,
      appRoutingURL.DASHBOARD_PAGE,
    ]);
    if (userModel.userName && userModel.password) {
      var body = {
        userName: userModel.userName,
        password: userModel.password,
      };
      this.http
        .post<ApiOutput<any>>(appSetting.API_ENDPOINT.LOGIN, body)
        .subscribe(
          (result) => {
            if (result && result.data && result.data.isLogin) {
              localStorage.setItem('token', result.data.token);
              localStorage.setItem(
                'isLogin',
                result.data.isLogin ? 'true' : 'false'
              );
              localStorage.setItem('userid', result.data.id);
              localStorage.setItem('userName', result.data.userName);
              localStorage.setItem(
                'name',
                this.getFullName(
                  result.data.firstName,
                  result.data.lastName,
                  result.data.userName
                )
              );
              this.router.navigate([
                appRoutingURL.PORTAL_PAGE,
                appRoutingURL.DASHBOARD_PAGE,
              ]);
              this.loaderService.hide();
            } else {
              this.loaderService.hide();
              //this.toastr.error(result.data.error.message);
            }
          },
          (error) => {
            this.loaderService.hide();
            console.log(error);
            let errorMessage = error.error.message
              ? error.error.message
              : error.message;
            //this.toastr.error(errorMessage);
          }
        );
    } else {
      //this.toastr.warning('Please enter username and password');
    }
  }

  getFullName(firstName: string, lastName: string, userName: string) {
    if (firstName || lastName) {
      const fullname = firstName + ' ' + lastName;
      return fullname.trim();
    } else {
      return userName;
    }
  }

  public SignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userid');
    localStorage.removeItem('userName');
    localStorage.removeItem('name');
    this.router.navigate([appRoutingURL.LOGIN_PAGE]);
  }

  getUserName() {
    const userName = sessionStorage.getItem('name');
    return userName;
  }
}
