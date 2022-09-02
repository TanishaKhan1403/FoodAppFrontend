import { Component, OnInit } from '@angular/core';
import { BranchService } from '../Services/branch.service';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {
  result: any;

  constructor(private branch: BranchService) { }

  ngOnInit(): void {
    this.branch.getData().subscribe((data) => {
      this.result = data;
      this.result = this.result.t;
      console.log(this.result);
    });
  }
  deleteBranch(_id: any) {
    this.branch.deleteData(_id).subscribe((res) => {
      console.log(res);
    });
  }

}
