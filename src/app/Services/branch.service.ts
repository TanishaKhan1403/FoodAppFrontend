import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http:HttpClient) { }
  // getting the data from the server using http get methods 
  getData(){
    return this.http.get("http://localhost:8080/api/findallbranch");
  }

  // add the data to the server by using http post methods 
  addData(branch:any){
     return this.http.post("http://localhost:8080/api/savebranch",branch);
  } 
  
  // deleting product using http detele methods 
  deleteData(_id:any){
   return this.http.delete(`http://localhost:8080/api/deletebranch/${_id}`);
  }
  
  //updating http method
  updateData(_id:any,branch:any){
      return this.http.put(`http://localhost:8080/api/updatebranch/${_id}`,branch);
  }

}
