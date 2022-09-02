import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Branch } from '../branch';
import { Foodorder } from '../foodorder';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(private route:ActivatedRoute, private order:OrderService) { }
  result:any;
  order1 =new Foodorder()

  ngOnInit(): void {
    let id=this.route.snapshot.params['_id'];
    

    this.order.getData().subscribe((data: any)=>{
      this.result=data;

      for(let r of this.result.t){
            if(id === r._id){
                this.order1=r;
                console.log(this.order1);
            }
      }
    })
}


editOrder(form:NgForm){
    this.order.updateData(this.order1.id,form.value).subscribe((res: any)=>{
      console.log(res);
    })
}}
