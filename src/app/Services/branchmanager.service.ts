import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchmanagerService {
  token:any;

  constructor(private http:HttpClient) { }

  // getting the data from the server using http get methods 
  getData(){
    return this.http.get("http://localhost:8080/api/findallbranchmanager");
  }

  // add the data to the server by using http post methods 
  addData(branchmanager:any){
     return this.http.post("http://localhost:8080/api/savebranchmanager",branchmanager);
  } 
  
  // deleting product using http detele methods 
  deleteData(_id:any){
   return this.http.delete(`http://localhost:8080/api/deletebranchmanager/${_id}`);
  }
  
  //updating http method
  updateData(_id:any,branchmanager:any){
      return this.http.put(`http://localhost:8080/api/updatebranchmanager/${_id}`,branchmanager);
  }
  loginData(branchmanager:any){
    return this.http.post("http://localhost:8080/api/getbymanager",branchmanager);
 }
 getRole(){
  return localStorage.getItem('registeredRole');
 }
 login2(){
  if( this.getRole()==='branch manager'){
 
    return true;
  }
  else{
    return false;
  }

 }}
