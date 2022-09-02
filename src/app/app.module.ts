import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBranchmanagerComponent } from './add-branchmanager/add-branchmanager.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule } from '@angular/forms';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditBranchManagerComponent } from './edit-branch-manager/edit-branch-manager.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { BranchManagerdetailsComponent } from './branch-managerdetails/branch-managerdetails.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { BranchManagerLoginComponent } from './branch-manager-login/branch-manager-login.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAdminComponent,
    AddBranchmanagerComponent,

    EditAdminComponent,
    EditBranchManagerComponent,
    AddStaffComponent,
    EditStaffComponent,
    AdminDetailsComponent,
    BranchManagerdetailsComponent,
    StaffDetailsComponent,
    AdminLoginComponent,

    StaffLoginComponent,
    AddBranchComponent,
    AddOrderComponent,
    AddProductComponent,
    AddItemComponent,
    BranchDetailsComponent,
    ProductDetailsComponent,
    OrderDetailsComponent,
    ItemDetailsComponent,
    BranchManagerLoginComponent,
    AddMenuComponent,
    EditBranchComponent,
    EditOrderComponent,
    EditProductComponent,
    EditItemComponent,
    EditMenuComponent,
    MenuDetailsComponent,
   
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
