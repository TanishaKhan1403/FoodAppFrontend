import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Menu } from '../menu';

import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menu=new Menu()

  constructor(private service:MenuService) { }
  ngOnInit(): void {
  }
  addMenu(form:NgForm){
    this.service.addData(this.menu).subscribe((data)=>{
     console.log(data)
    });
    console.log(form.value);
 }

}
