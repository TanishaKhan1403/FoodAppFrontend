import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }
  // getting the data from the server using http get methods 
  getData(){
    return this.http.get("http://localhost:8080/api/findallmenu");
  }

  // add the data to the server by using http post methods 
  addData(menu:any){
     return this.http.post("http://localhost:8080/api/savemenu",menu);
  } 
  
  // deleting product using http detele methods 
  deleteData(_id:any){
   return this.http.delete(`http://localhost:8080/api/deletemenu/${_id}`);
  }
  
  //updating http method
  updateData(_id:any,menu:any){
      return this.http.put(`http://localhost:8080/api/updatemenu/${_id}`,menu);
  }

}
