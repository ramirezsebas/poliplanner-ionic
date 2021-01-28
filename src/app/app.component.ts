import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwUpdate } from '@angular/service-worker';

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
  ) {
    this.initializeApp();

    // No tested
    this.updateAppAuto(updates);

    this.preflight();
  }


  preflight() {
    const isMobile =()=> { return this.platform.is('mobile'); }
    const isPWA =()=> { return this.platform.is ('pwa'); }
    const isTablet =()=> { return this.platform.is ('tablet'); } 
    if (!(!isMobile() || isPWA() || isTablet())) {
      let nroVisitas = window.localStorage.visitas; 
      console.log('hola');
      if(nroVisitas=="undefined" || nroVisitas==10){
        
        window.localStorage.visitas=0;
        this.navCtrl.navigateForward('preflight')
      }
      else
        window.localStorage.visitas++;

    }
  }
  updateAppAuto(updates: SwUpdate) {
    const updateApp = ()=>{
      document.location.reload();
      console.log("The app is updating right now");
    }

    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => updateApp());
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.checkDarkTheme();
    });
  }


  checkDarkTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    if ( prefersDark.matches ) {
      document.body.classList.toggle( 'dark' );
    }
  }
}
