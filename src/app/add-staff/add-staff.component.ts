import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  data:any;

  constructor(private staff:StaffService) { }

  ngOnInit(): void {
  }

  addStaff(form:NgForm){
    this.staff.addData(form.value).subscribe((res)=>{
      this.data=res;
      console.log(this.data)
      console.log(this.data.role);
      localStorage.setItem('role',this.data.role);
     });
     console.log(form.value);
 }
}