import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwUpdate } from '@angular/service-worker';
import { AppUpdateService } from './servicios/app-update-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public updates:SwUpdate,
    private navCtrl: NavController,
    private prueba: AppUpdateService,
  ) {
    this.initializeApp();
    this.preflight();
  }


  preflight() {
    const isMobile =()=> { return this.platform.is('mobile'); }
    const isPWA =()=> { return this.platform.is ('pwa'); }
    const isTablet =()=> { return this.platform.is ('tablet'); } 
    if (!(!isMobile() || isPWA() || isTablet())) {
      let nroVisitas = window.localStorage.visitas; 
      if(nroVisitas=="undefined" || nroVisitas==10){
        
        window.localStorage.visitas=0;
        this.navCtrl.navigateForward('preflight')
      }
      else
        window.localStorage.visitas++;

    }
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.checkDarkTheme();
    });
  }


  checkDarkTheme() {
    if(window.localStorage.dark == "undefined"){
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      window.localStorage.dark = prefersDark.matches
    }
    const dark = window.localStorage.dark == 'true'? true: false;
    document.body.classList.toggle( 'dark', dark );
  }
}
