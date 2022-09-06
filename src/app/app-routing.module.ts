import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddBranchmanagerComponent } from './add-branchmanager/add-branchmanager.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AddBranchComponent } from './add-branch/add-branch.component';

import { BranchManagerdetailsComponent } from './branch-managerdetails/branch-managerdetails.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';


import { StaffLoginComponent } from './staff-login/staff-login.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditBranchManagerComponent } from './edit-branch-manager/edit-branch-manager.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { BranchManagerLoginComponent } from './branch-manager-login/branch-manager-login.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { BranchmanagerGuardGuard } from './branchmanager-guard.guard';
import { StaffGuardGuard } from './staff-guard.guard';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';

const routes: Routes = [
  {path:"admin",component:AdminDetailsComponent},
  {path:"add-admin",component:AddAdminComponent,},
  {path:"add-branchmanager",component:AddBranchmanagerComponent},
  {path:"add-branch",component:AddBranchComponent,canActivate:[AdminGuardGuard]},
  {path:"add-staff",component:AddStaffComponent,canActivate:[BranchmanagerGuardGuard]},
  {path:"edit-admin/:id",component:EditAdminComponent},
  {path:"edit-branchmanager/:id",component:EditBranchManagerComponent},
  {path:"edit-staff/:id",component:EditStaffComponent},
  {path:"branchmanager",component:BranchManagerdetailsComponent,},
  {path:"staff",component:StaffDetailsComponent,},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"add-order",component: AddOrderComponent,canActivate:[StaffGuardGuard]},
  {path:"staff-login",component:StaffLoginComponent,},
  {path:"add-product",component:AddProductComponent,canActivate:[BranchmanagerGuardGuard]},
  {path:"add-item",component:AddItemComponent,canActivate:[StaffGuardGuard]},
  {path:"branch",component:BranchDetailsComponent,canActivate:[AdminGuardGuard]},
  {path:"product",component:ProductDetailsComponent,canActivate:[BranchmanagerGuardGuard]},
  {path:"order",component:OrderDetailsComponent,canActivate:[StaffGuardGuard]},
  {path:"item",component:ItemDetailsComponent,canActivate:[StaffGuardGuard]},
  {path:"branch-manager-login",component: BranchManagerLoginComponent},
  {path:"staff-login",component:StaffLoginComponent},
  {path:"add-menu",component:AddMenuComponent,canActivate:[BranchmanagerGuardGuard]},
  {path:"edit-branch/:id",component:EditBranchComponent},
  {path:"edit-order/:id",component:EditOrderComponent},
  {path:"edit-item/:id",component:EditItemComponent},
  {path:"edit-product/:id",component:EditProductComponent},
  {path:"menu",component:MenuDetailsComponent,canActivate:[BranchmanagerGuardGuard]},
  {path:"product",component:ProductDetailsComponent,canActivate:[BranchmanagerGuardGuard]},
  {path:"edit-menu/:id",component:EditMenuComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
