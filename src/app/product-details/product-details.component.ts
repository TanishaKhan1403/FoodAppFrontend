import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  result: any;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.getData().subscribe((data) => {
      this.result = data;
      this.result = this.result.t;
      console.log(this.result);
    });
  }

  deleteProduct(_id: any) {
    this.product.deleteData(_id).subscribe((res) => {
      console.log(res);
    });
  }

}
