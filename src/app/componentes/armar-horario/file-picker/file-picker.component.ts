import { Component, Input, OnInit } from '@angular/core';
import { PopoverController, AlertController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';


@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent implements OnInit {
  FileName: string;
  dataFromExcel: any[];


  constructor(
    private alertController: AlertController,
    private excel: ExcelService,
    public toastController: ToastController
  ) {
  }

  ngOnInit() {}


  async readFilePopup() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Seleccionar Horario",
      message: "<p>Actualizado de la Facultad!</p>",
      // backdropDismiss: false,
      buttons: [
        {
          text: "Buscar",
          handler: () => {
            document.getElementById("file-input").click();
          },
        },
      ],
    });

    await alert.present();
  }

  async onFileChange(evt: any) {
   

    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    
    try {
      this.excel.toData(target);
      // this.presentToast('Datos cargados correctamente');
    } catch (error) {
      console.log('hola');

      this.presentToast('Error' + error);
    }

  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  
  // async presentToast(msg="") {
  //   const toast = document.createElement('ion-toast');
  //   toast.message = msg;
  //   toast.duration = 2000;
  //   toast.position = 'middle';
  
  //   document.body.appendChild(toast);
  //   return toast.present();
  // }
  
}
