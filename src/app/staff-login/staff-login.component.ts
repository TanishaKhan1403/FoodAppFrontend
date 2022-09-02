import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaffService } from '../Services/staff.service';
import { Staff } from '../staff';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {
  staff = new Staff();
  result: any;
  registeredRole: any;
  staffId: any;

  constructor(private staff1: StaffService) { }

  ngOnInit(): void {}
  loginStaff(form: NgForm) {
    console.log(form.value);
    this.staff1.loginData(form.value).subscribe(
      (res) => {
        this.result = res;
        this.registeredRole = this.result.role;
        this.staffId = this.result.id;
        console.log(res);
        localStorage.setItem('staffId', this.staffId);
        localStorage.setItem('registeredRole', this.registeredRole);
        window.alert('Loggedd in');
      },
      (error) => {
        alert('Invalid');
      }
    );
  }

}
