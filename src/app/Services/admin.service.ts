import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BranchManager } from '../branch-manager';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  token:any;

  constructor(private http:HttpClient) { }

  // getting the data from the server using http get methods 
  getData(){
    return this.http.get("http://localhost:8080/api/findalladmin");
  }

  // add the data to the server by using http post methods 
  addData(admin:any){
     return this.http.post("http://localhost:8080/api/saveadmin",admin);
  } 
  
  // deleting product using http detele methods 
  deleteData(id:any){
   return this.http.delete(`http://localhost:8080/api/deleteadmin/${id}`);
  }
  
  //updating http method
  updateData(_id:any,admin:any){
      return this.http.put(`http://localhost:8080/api/editadmin/${_id}`,admin);
  }

  loginData(admin:any){
    return this.http.post("http://localhost:8080/api/getby",admin);
 } 

 getRole(){
  return localStorage.getItem('registeredRole');
 }
 login1(){

if( this.getRole()=='admin'){
 
  return true;
}
else{
  return false;
}
 }

}
