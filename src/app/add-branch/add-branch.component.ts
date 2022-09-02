import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Branch } from '../branch';
import { BranchService } from '../Services/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
  branch1=new Branch;

  constructor(private branch:BranchService) { }

  ngOnInit(): void {}
    addBranch(form:NgForm){
      this.branch.addData(this.branch1).subscribe((data)=>{
        console.log(data)
       });
       console.log(form.value);
}}
