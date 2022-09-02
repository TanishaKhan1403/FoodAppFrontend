import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StaffService } from './Services/staff.service';

@Injectable({
  providedIn: 'root'
})
export class StaffGuardGuard implements CanActivate {
  constructor(private service:StaffService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.service.login3()==true){
        return true;
      }
      else{
        window.alert("please login as staff")
        return false;
      }
    
    
  }
  
}
