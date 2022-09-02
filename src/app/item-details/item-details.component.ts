import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  result: any;
  constructor(private item: ItemService) { }

  ngOnInit(): void {
    this.item.getData().subscribe((data) => {
      this.result = data;
      this.result = this.result.t;
      console.log(this.result);
    });
  }

  deleteItem(_id: any) {
    this.item.deleteData(_id).subscribe((res) => {
      console.log(res);
    });
  }


}
