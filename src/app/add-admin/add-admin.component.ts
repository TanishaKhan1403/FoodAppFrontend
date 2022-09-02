import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  data:any;

  constructor(private admin:AdminService) { }

  ngOnInit(): void {
  }

  addAdmin(form:NgForm){
     this.admin.addData(form.value).subscribe((res)=>{
      this.data=res;
      console.log(this.data)
      console.log(this.data.role);
      localStorage.setItem('role',this.data.role);
     });
     console.log(form.value);
     
  }
}
