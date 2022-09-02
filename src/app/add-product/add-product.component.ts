import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Foodproduct } from '../foodproduct';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private product:ProductService) { }
  product1=new Foodproduct()
  ngOnInit(): void {
  }
  addProduct(form:NgForm){
    this.product.addData(this.product1).subscribe((data)=>{
     console.log(data)
    });
    console.log(form.value);
 }

}
