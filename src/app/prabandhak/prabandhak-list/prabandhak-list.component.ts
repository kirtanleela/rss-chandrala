import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-prabandhak-list',
  templateUrl: './prabandhak-list.component.html',
  styleUrls: ['./prabandhak-list.component.css']
})
export class PrabandhakListComponent implements OnInit {
  products: any = [];

  constructor(private productService: ApiService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data:any) => {
          this.products = data;
      });
  }
}
