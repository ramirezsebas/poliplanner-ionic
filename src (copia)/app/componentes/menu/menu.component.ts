import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuController, private router: Router) { }

  // onClick(dir: string) {
  //   console.log('cerrado', this.menu.getOpen());
  //   this.menu.close();
  //   this.menu.getOpen()
  //   this.menu.enable(true,'first')
  //   console.log('habilitando',this.menu);
  //   console.log(this.menu.isEnabled())

  // }
  
  ngOnInit() {}

}
