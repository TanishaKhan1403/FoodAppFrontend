import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'],
})
export class EditMenuComponent implements OnInit {
  constructor(private route:ActivatedRoute,private menu:MenuService) { }
  result:any;
  selectedMenu= new Menu();
  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    console.log("id from website "+id);

    this.menu.getData().subscribe((data)=>{
      this.result=data;

      for(let r of this.result.t){
            if(id == r.id){
                this.selectedMenu=r;
                console.log(this.selectedMenu);
            }
      }
    })

  }

  editMenu(form:NgForm){
      this.menu.updateData(this.selectedMenu.id,this.selectedMenu).subscribe((res: any)=>{
        console.log(res);
      })
  }
}
