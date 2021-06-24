import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FilePickerComponent } from 'src/app/componentes/armar-horario/file-picker/file-picker.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: "app-cargar-horario",
  templateUrl: "./cargar-horario.page.html",
  styleUrls: ["./cargar-horario.page.scss"],
})
export class CargarHorarioPage implements OnInit {

  @ViewChild('fp') filepicker; 
  @ViewChild('footer') footer;
  oldData: DataService;


  constructor(public data: DataService, private navCtrl:NavController) { 
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
      }
    }else if(this.data.seccionActual == 3){
    }else if(this.data.seccionActual == 4){
      if(confirm('Desea guardar el horario')){
        window.localStorage.clear()
        window.localStorage.data = JSON.stringify(this.data);
        this.navCtrl.navigateRoot('inicio')
        window.location.replace('inicio')
      }else
        this.footer.previous();
      
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
    `Sel. mat. a cursar`,
    `Sel. secciones `,
    `Sel. secciones `,
  ]
  ngOnInit() {
    this.data.initialize();
    
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
