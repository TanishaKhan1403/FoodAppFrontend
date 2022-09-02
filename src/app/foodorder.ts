import { Branch } from "./branch";
import { BranchDetailsComponent } from "./branch-details/branch-details.component";
import { Staff } from "./staff";

export class Foodorder {
  
  id!: number;
  status!: string;
  totalPrice!: number;
  orderDeliveryTime!: string;
  orderCreatedTime!: string;
  customerName!: string;
  contactNumber!: string;
  customerEmailId!: string;
  branch=new Branch;
  staff=new Staff;

}
