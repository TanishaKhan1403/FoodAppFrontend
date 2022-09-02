import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("http://localhost:8080/api/findallfoodproduct");
  }

  // add the data to the server by using http post methods 
  addData(product:any){
     return this.http.post("http://localhost:8080/api/savefoodproduct",product);
  } 
  
  // deleting product using http detele methods 
  deleteData(_id:any){
   return this.http.delete(`http://localhost:8080/api/deletefoodproduct/${_id}`);
  }
  
  //updating http method
  updateData(_id:any,product:any){
      return this.http.put(`http://localhost:8080/api/updatefoodproduct/${_id}`,product);
  }
}
