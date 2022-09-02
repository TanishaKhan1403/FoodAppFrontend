import { Menu } from "./menu"

export class Foodproduct {
    id!:number

    name!:string

    type!:string
    about!:string

    availability!:string

    price!:number
    quantity!:string

    menu = new Menu()

}
