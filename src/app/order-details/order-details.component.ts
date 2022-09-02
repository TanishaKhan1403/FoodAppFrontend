import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  result: any;
  constructor(private order: OrderService) { }

  ngOnInit(): void {
    this.order.getData().subscribe((data) => {
      this.result = data;
      this.result = this.result.t;
      console.log(this.result);
    });
  }

  deleteOrder(_id: any) {
    this.order.deleteData(_id).subscribe((res) => {
      console.log(res);
    });
  }


}
