import { Component, OnInit } from '@angular/core';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {
  result:any;
  constructor(private staff:StaffService) { }

  ngOnInit(): void {
    this.staff.getData().subscribe((data)=>{
      this.result=data;
      this.result=this.result.t;
      console.log(this.result);
});
  }
  deleteStaff(_id:any){
    this.staff.deleteData(_id).subscribe((res)=>{
      console.log(res);
    });
}

}
