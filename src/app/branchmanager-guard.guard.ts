import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BranchmanagerService } from './Services/branchmanager.service';

@Injectable({
  providedIn: 'root'
})
export class BranchmanagerGuardGuard implements CanActivate {
  constructor(private service:BranchmanagerService){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(this.service.login2()==true){
        return true;
      }
      else{
        window.alert("please login as branch manager")
        return false;
      }
    
  }
  
}
