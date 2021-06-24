import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService { 
  constructor(private readonly updates: SwUpdate, public toastController: ToastController) {
    this.updates.available.subscribe(event => {
      this.showAppUpdateAlert();
    });
  }

  showAppUpdateAlert() {
    const header = 'Actualización disponible';
    const message = 'Toca en Ok para actualizar ahora';
    const action = this.doAppUpdate;
    const caller = this;
    // Use MatDialog or ionicframework's AlertController or similar
    this.presentAlert(header, message, action, caller);
  }

  doAppUpdate() {
    this.updates.activateUpdate().then(() => document.location.reload());
    document.location.reload();
  }


  async presentAlert(header, message, action, caller) {
    const toast = await this.toastController.create({
      header: header,
      message: message,
      position: 'bottom',
      buttons: [
        {
          side: 'start',
          text: 'Canc.',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Ok',
          // side: 'end',
          handler: () => {
            this.doAppUpdate();
          }
        }
      ]
    });
    toast.present();
  }
}