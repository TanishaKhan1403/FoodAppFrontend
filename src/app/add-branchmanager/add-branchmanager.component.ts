import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchManager } from '../branch-manager';
import { BranchmanagerService } from '../Services/branchmanager.service';

@Component({
  selector: 'app-add-branchmanager',
  templateUrl: './add-branchmanager.component.html',
  styleUrls: ['./add-branchmanager.component.css']
})
export class AddBranchmanagerComponent implements OnInit {
  branchmanager=new BranchManager()

  constructor(private service:BranchmanagerService) { }
data:any;
  ngOnInit(): void {
  }

  addBranchmanager(form:NgForm){
    this.service.addData(form.value).subscribe((res)=>{
      this.data=res;
      console.log(this.data)
      console.log(this.data.role);
      localStorage.setItem('role',this.data.role);
     });
     console.log(form.value);
     
  }
  }

