import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from '../Services/staff.service';
import { Staff } from '../staff';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  constructor(private route:ActivatedRoute,private staff:StaffService) { }
  result:any;
  selectedStaff= new Staff();
  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    console.log("id from website "+id);

    this.staff.getData().subscribe((data)=>{
      this.result=data;

      for(let r of this.result.t){
            if(r.id == id){
                this.selectedStaff=r;
                console.log(this.selectedStaff);
            }
      }
    })

  }

  editStaff(form:NgForm){
      this.staff.updateData(this.selectedStaff.id,this.selectedStaff).subscribe((res: any)=>{
        console.log(res);
      })
  }
}


