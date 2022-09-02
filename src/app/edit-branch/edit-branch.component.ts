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

  constructor(private route:ActivatedRoute, private branch:BranchService) { }
  result:any;
  branch1 =new Branch()
  ngOnInit(): void {
    let id=this.route.snapshot.params['_id'];
    

    this.branch.getData().subscribe((data: any)=>{
      this.result=data;

      for(let r of this.result.t){
            if(id === r._id){
                this.branch1=r;
                console.log(this.branch1);
            }
      }
    })

  }

  editBranch(form:NgForm){
      this.branch.updateData(this.branch1.id,form.value).subscribe((res: any)=>{
        console.log(res);
      })
  }

}
