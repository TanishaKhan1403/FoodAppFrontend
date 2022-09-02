import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class StaffService {
  token:any;

  constructor(private http:HttpClient) { }

  // getting the data from the server using http get methods 
  getData(){
    return this.http.get("http://localhost:8080/api/findallstaff");
  }

  // add the data to the server by using http post methods 
  addData(staff:any){
     return this.http.post("http://localhost:8080/api/savestaff",staff);
  } 
  
  // deleting product using http detele methods 
  deleteData(_id:any){
   return this.http.delete(`http://localhost:8080/api/deletestaff/${_id}`);
  }
  
  //updating http method
  updateData(_id:any,staff:any){
      return this.http.put(`http://localhost:8080/api/updatestaff/${_id}`,staff);
  }
  loginData(staff:any){
    return this.http.post("http://localhost:8080/api/getbystaff",staff);
 } 
 getRole(){
  return localStorage.getItem('registeredRole');
  
 }
login3(){
  if(this.getRole()=='staff'){
    return true;
  }
  else{
    return false;
  }
}


}
