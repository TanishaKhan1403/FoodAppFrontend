import { BranchManager } from "./branch-manager";

export class Menu {
    id!:number;
    name!:String;
    
    branchmanager=new BranchManager();
    constructor(){}
   
}
