import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }
  // getting the data from the server using http get methods 
  getData(){
    return this.http.get("http://localhost:8080/api/findallitems");
  }

  // add the data to the server by using http post methods 
  addData(item:any){
     return this.http.post("http://localhost:8080/api/saveitems",item);
  } 
  
  // deleting product using http detele methods 
  deleteData(_id:any){
   return this.http.delete(`http://localhost:8080/api/deleteitems/${_id}`);
  }
  
  //updating http method
  updateData(_id:any,item:any){
      return this.http.put(`http://localhost:8080/api/updateitems/${_id}`,item);
  }

}
