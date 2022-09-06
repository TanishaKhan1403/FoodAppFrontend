import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Branch } from '../branch';
import { Foodorder } from '../foodorder';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
})
export class EditOrderComponent implements OnInit {
  constructor(private route:ActivatedRoute,private order:OrderService) { }
  result:any;
  selectedOrder= new Foodorder();
  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    console.log("id from website "+id);

    this.order.getData().subscribe((data)=>{
      this.result=data;

      for(let r of this.result.t){
            if(r.id == id){
                this.selectedOrder=r;
                console.log(this.selectedOrder);
            }
      }
    })

  }

  editOrder(form:NgForm){
      this.order.updateData(this.selectedOrder.id,this.selectedOrder).subscribe((res: any)=>{
        console.log(res);
      })
  }
}
