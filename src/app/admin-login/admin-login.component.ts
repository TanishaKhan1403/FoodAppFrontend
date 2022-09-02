import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../admin';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  admin = new Admin();
  result: any;
  registeredRole: any;
  adminId: any;
  constructor(private admin1: AdminService) {}

  ngOnInit(): void {}
  loginAdmin(form: NgForm) {
    console.log(form.value);
    this.admin1.loginData(form.value).subscribe(
      (res) => {
        this.result = res;
        this.registeredRole = this.result.role;
        this.adminId = this.result.id;
        console.log(res);
        localStorage.setItem('adminId', this.adminId);
        localStorage.setItem('registeredRole', this.registeredRole);
        window.alert('Loggedd in');
      },
      (error) => {
        alert('Invalid');
      }
    );
  }
}
