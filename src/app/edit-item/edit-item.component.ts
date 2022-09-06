import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(private route:ActivatedRoute,private item:ItemService) { }
  result:any;
  selectedItem= new Item();
  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    console.log("id from website "+id);

    this.item.getData().subscribe((data)=>{
      this.result=data;

      for(let r of this.result.t){
            if(r.id == id){
                this.selectedItem=r;
                console.log(this.selectedItem);
            }
      }
    })

  }

  editItem(form:NgForm){
      this.item.updateData(this.selectedItem.id,form.value).subscribe((res: any)=>{
        console.log(res);
      })
  }
}
