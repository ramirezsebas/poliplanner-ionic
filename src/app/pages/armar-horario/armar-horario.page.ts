import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-armar-horario',
  templateUrl: './armar-horario.page.html',
  styleUrls: ['./armar-horario.page.scss'],
})
export class ArmarHorarioPage implements OnInit {

  data = new DataService;
  @ViewChild('fp') filepicker; 
  @ViewChild('footer') footer; 


  constructor(public dataTrue: DataService, private navCtrl:NavController) { 
  }

  validarSeccion(){
    
    if(this.data.seccionActual == 1){
      //this.data = this.dataTrue;
    }else if(this.data.seccionActual == 2){
      
      if(!this.data.dataFromExcel){
        this.footer.previous();
        this.filepicker.readFilePopup()
      }else if(this.data.dataFromExcel[0].length==0){
        this.footer.previous();
        this.filepicker.readFilePopup()
      }else{
       this.filepicker.toData();
      }
    }else if(this.data.seccionActual == 3){
    }else if(this.data.seccionActual == 8){
      
      this.dataTrue.remplazarDatos(this.data)
      window.localStorage.clear()
      window.localStorage.data = JSON.stringify(this.data);
      this.navCtrl.navigateRoot('inicio')
      window.location.replace('inicio')
    }
    return this.data.seccionActual;
  }

  // Para cargar materias
  onChangeApro(selected, id) {
    this.data.materiasAprobadas[id] = selected;
    // console.log(this.data.materiasAprobadas);
    
  }

  onChangeSel(selected,id){
    this.data.materiasSeleccionadas[id] = selected;    
  }

  onClick(){
    
  }

  textForHeader=[
    '',
    `Selecciona tu/s carrera/s`,
    `Sel. mat. aprobadas`,
    `Sel. mat. a cursar`,
    `Sel. secciones `,
    `Confirma las secciones `,
    `Confirma el Horario `,
    `Confirma el Calendario `,
  ]
  ngOnInit() {
    this.data= new DataService()

    //console.log('data:' ,this.data.seleccionados);
    
  }


  async presentToast(msg="") {
    const toast = document.createElement('ion-toast');
    toast.message = msg;
    toast.position = 'middle'
    toast.duration = 2000;
    // toast.style.setProperty('--width', '60%')
  
    document.body.appendChild(toast);
    return toast.present();
  }
}
