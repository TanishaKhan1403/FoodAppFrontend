import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private order :ItemService) { }

  ngOnInit(): void {
  }
  addItem(form:NgForm){
    this.order.addData(form.value).subscribe((data)=>{
     console.log(data)
    });
    console.log(form.value);
 }

}
