import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
  result:any;
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.admin.getData().subscribe((data)=>{
      this.result=data;
      this.result=this.result.t;
      console.log(this.result);
});
  }
  deleteAdmin(id:any){
    this.admin.deleteData(id).subscribe((res)=>{
      console.log(res);
    });
}

}
