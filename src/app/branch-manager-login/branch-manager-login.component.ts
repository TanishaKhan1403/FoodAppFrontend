import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchManager } from '../branch-manager';
import { BranchmanagerService } from '../Services/branchmanager.service';

@Component({
  selector: 'app-branch-manager-login',
  templateUrl: './branch-manager-login.component.html',
  styleUrls: ['./branch-manager-login.component.css']
})
export class BranchManagerLoginComponent implements OnInit {
  branchmanager = new BranchManager();
  result: any;
  registeredRole: any;
  branchmanagerId: any;

  constructor(private branchmanager1: BranchmanagerService) { }

  ngOnInit(): void {}
  loginManager(form: NgForm) {
    console.log(form.value);
    this.branchmanager1.loginData(form.value).subscribe(
      (res) => {
        this.result = res;
        this.registeredRole = this.result.role;
        this.branchmanagerId = this.result.id;
        console.log(res);
        localStorage.setItem('branchmanagerId', this.branchmanagerId);
        localStorage.setItem('registeredRole', this.registeredRole);
        window.alert('Logged in');
      },
      (error) => {
        alert('Invalid');
      }
    );
  }
  

}
