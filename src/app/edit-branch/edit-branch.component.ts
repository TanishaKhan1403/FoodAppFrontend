import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Branch } from '../branch';
import { BranchService } from '../Services/branch.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  constructor(private route:ActivatedRoute,private branch:BranchService) { }
  result:any;
  selectedBranch= new Branch();
  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    console.log("id from website "+id);

    this.branch.getData().subscribe((data)=>{
      this.result=data;

      for(let r of this.result.t){
            if(r.id == id){
                this.selectedBranch=r;
                console.log(this.selectedBranch);
            }
      }
    })

  }

  editBranch(form:NgForm){
      this.branch.updateData(this.selectedBranch.id,this.selectedBranch).subscribe((res: any)=>{
        console.log(res);
      })
  }

}
