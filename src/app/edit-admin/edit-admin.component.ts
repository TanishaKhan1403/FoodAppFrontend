import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  constructor(private route:ActivatedRoute,private admin:AdminService) { }
  result:any;
 admin1 =new Admin()
  ngOnInit(): void {
    let id=this.route.snapshot.params['_id'];
    

    this.admin.getData().subscribe((data: any)=>{
      this.result=data;

      for(let r of this.result.t){
            if(id === r._id){
                this.admin1=r;
                console.log(this.admin1);
            }
      }
    })

  }

  editAdmin(form:NgForm){
      this.admin.updateData(this.admin1.id,form.value).subscribe((res: any)=>{
        console.log(res);
      })
  }
}
