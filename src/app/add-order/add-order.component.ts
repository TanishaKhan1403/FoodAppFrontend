import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Foodorder } from '../foodorder';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  order1=new Foodorder();

  constructor(private order:OrderService) { }

  ngOnInit(): void {
  }
  addOrder(form:NgForm){
    this.order.addData(this.order1).subscribe((data)=>{
     console.log(data)
    });
    console.log(form.value);
 }

}
