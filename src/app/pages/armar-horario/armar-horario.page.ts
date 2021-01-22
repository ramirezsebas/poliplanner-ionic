import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FilePickerComponent } from 'src/app/componentes/armar-horario/file-picker/file-picker.component';
import { DataService } from '../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-armar-horario',
  templateUrl: './armar-horario.page.html',
  styleUrls: ['./armar-horario.page.scss'],
})
export class ArmarHorarioPage implements OnInit {

  data = new DataService;
  @ViewChild('fp') filepicker; 


  constructor(public dataTrue: DataService, private navCtrl:NavController) { 
    
  }

  validarSeccion(){
    
    if(this.data.seccionActual == 1){
      //this.data = this.dataTrue;
    }else if(this.data.seccionActual == 2){
      
    }else if(this.data.seccionActual == 3){
      console.log(this.data.dataFromExcel);
      
      if(!this.data.dataFromExcel){
        this.data.seccionActual--;
        this.filepicker.readFilePopup()
      }else if(this.data.dataFromExcel[0].length==0){
        this.data.seccionActual--;
        this.filepicker.readFilePopup()
      }
    }else if(this.data.seccionActual == 8){
      
      this.dataTrue.remplazarDatos(this.data)
      window.localStorage.clear()
      window.localStorage.data = JSON.stringify(this.data);
      this.navCtrl.navigateRoot('inicio')
      window.location.replace('inicio')
    }
    return this.data.seccionActual;
  }

  onClick(){
    
  }

  textForHeader=[
    `Paso ${this.data.seccionActual}: Selecciona tu/s carrera/s`,
    `Paso ${this.data.seccionActual}: Sel. mat. aprobadas`,
    `Paso ${this.data.seccionActual}: Sel. mat. a cursar`,
    `Paso ${this.data.seccionActual}: Sel. secciones `,
    `Paso ${this.data.seccionActual}: Confirma las secciones `,
    `Paso ${this.data.seccionActual}: Confirma el Horario `,
    `Paso ${this.data.seccionActual}: Confirma el Calendario `,
  ]

  ngOnInit() {
    this.data= new DataService()

    //console.log('data:' ,this.data.seleccionados);
    
  }


  async presentToast(msg="") {
    const toast = document.createElement('ion-toast');
    toast.message = msg;
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }
}
