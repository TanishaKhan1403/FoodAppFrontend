import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(private route:ActivatedRoute, private item:ItemService) { }

  result:any;
 
 ngOnInit(): void {
  let id=this.route.snapshot.params['_id'];
  

  this.item.getData().subscribe((data: any)=>{
    this.result=data;

    for(let r of this.result.t){
          if(id === r._id){
              this.item=r;
              console.log(this.item);
          }
    }
  })
}


editItem(form:NgForm){
  this.item.updateData(this.item,form.value).subscribe((res: any)=>{
    console.log(res);
  })
}

}
