import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  displayPage: boolean = true;  

  constructor(private menu: MenuController, private platform: Platform, private router: Router) {
    this.guiaDeInstalacion();
  }
  guiaDeInstalacion() {
    
    const isMobile =()=> { return this.platform.is('mobile'); }
    const isPWA =()=> { return this.platform.is ('pwa'); }
    const isTablet =()=> { return this.platform.is ('tablet'); } 
    if (!isMobile() || isPWA() || isTablet()) {
      this.displayPage = false;
    }

  }

  actualizar(){
    forceSWupdate();
    function forceSWupdate() {
      if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(registration => {
              registration.update().then(() => {
                window.location.reload();
              });
          });
      }
   }     
  }

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
