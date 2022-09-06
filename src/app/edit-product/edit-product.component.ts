import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Foodproduct } from '../foodproduct';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private product:ProductService) { }
  result:any;
  selectedProduct= new Foodproduct();
  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    console.log("id from website "+id);

    this.product.getData().subscribe((data)=>{
      this.result=data;

      for(let r of this.result.t){
            if(r.id == id){
                this.selectedProduct=r;
                console.log(this.selectedProduct);
            }
      }
    })

  }

  editProduct(form:NgForm){
      this.product.updateData(this.selectedProduct.id,this.selectedProduct).subscribe((res: any)=>{
        console.log(res);
      })
  }
}
