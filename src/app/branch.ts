import { Admin } from "./admin";


export class Branch {
  
    admin = new Admin;
  id!: number;
  name!: string;
  email!: string;
  address!: string;
  phoneNumber!: string;
  constructor() {}
}
