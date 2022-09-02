import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BranchmanagerService } from '../Services/branchmanager.service';

@Component({
  selector: 'app-edit-branch-manager',
  templateUrl: './edit-branch-manager.component.html',
  styleUrls: ['./edit-branch-manager.component.css']
})
export class EditBranchManagerComponent implements OnInit {

  constructor(private route:ActivatedRoute,private branchmanager:BranchmanagerService) { }
  result:any;
  selectedBranchmanager:any

  ngOnInit(): void {let id=this.route.snapshot.params['id'];
  console.log("id from website "+id);

  this.branchmanager.getData().subscribe((data: any)=>{
    this.result=data;
this.result=this.result.t;
    for(let r of this.result.branchmanager){
          if(r._id === id){
              this.selectedBranchmanager=r;
              console.log(this.selectedBranchmanager);
          }
    }
  })

  }
  editBranchmanager(form:NgForm){
    this.branchmanager.updateData(this.selectedBranchmanager._id,form.value).subscribe((res: any)=>{
      console.log(res);
    })
}

}
