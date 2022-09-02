import { Component, OnInit } from '@angular/core';
import { BranchmanagerService } from '../Services/branchmanager.service';

@Component({
  selector: 'app-branch-managerdetails',
  templateUrl: './branch-managerdetails.component.html',
  styleUrls: ['./branch-managerdetails.component.css'],
})
export class BranchManagerdetailsComponent implements OnInit {
  result: any;
  constructor(private branchmanager: BranchmanagerService) {}

  ngOnInit(): void {
    this.branchmanager.getData().subscribe((data) => {
      this.result = data;
      this.result = this.result.t;
      console.log(this.result);
    });
  }

  deleteBranchmanager(_id: any) {
    this.branchmanager.deleteData(_id).subscribe((res) => {
      console.log(res);
    });
  }
}
