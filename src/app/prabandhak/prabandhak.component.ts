import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-prabandhak',
  templateUrl: './prabandhak.component.html',
  styleUrls: ['./prabandhak.component.css']
})
export class PrabandhakComponent implements OnInit {
  products: any = [];

    constructor(private productService: ApiService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data:any) => {
            this.products = data;
        });
    }
  
}
