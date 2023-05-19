import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  public show: boolean = false;
  isLoading: boolean = false;
  loaderEvent: any;

  constructor(private loaderService: LoaderService) {
    this.init();
  }

  ngOnInit() {}

  init(): any {
    this.loaderEvent = this.loaderService.isLoading.subscribe(
      (res: boolean) => {
        this.isLoading = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.loaderEvent.unsubscribe();
  }
}
