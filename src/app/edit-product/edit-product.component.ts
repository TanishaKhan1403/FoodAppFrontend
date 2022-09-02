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

  constructor(private route:ActivatedRoute, private product:ProductService) { }

result:any;
 product1 =new Foodproduct()
 ngOnInit(): void {
  let id=this.route.snapshot.params['_id'];
  

  this.product.getData().subscribe((data: any)=>{
    this.result=data;

    for(let r of this.result.t){
          if(id === r._id){
              this.product1=r;
              console.log(this.product1);
          }
    }
  })
}


editProduct(form:NgForm){
  this.product.updateData(this.product1.id,form.value).subscribe((res: any)=>{
    console.log(res);
  })
}

}
