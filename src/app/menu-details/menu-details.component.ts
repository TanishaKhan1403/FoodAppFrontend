import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../Services/menu.service';


@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  
  result: any;
 
  constructor(private menu: MenuService) { }

  ngOnInit(): void {
    this.menu.getData().subscribe((data) => {
      this.result = data;
      this.result = this.result.t;
      console.log(this.result);
    });
  }

  deleteMenu(_id: any) {
    this.menu.deleteData(_id).subscribe((res) => {
      console.log(res);
    });
  }


}
