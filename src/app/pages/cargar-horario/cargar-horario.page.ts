import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FilePickerComponent } from 'src/app/componentes/armar-horario/file-picker/file-picker.component';
import { DataService } from 'src/app/services/data.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: "app-cargar-horario",
  templateUrl: "./cargar-horario.page.html",
  styleUrls: ["./cargar-horario.page.scss"],
})
export class CargarHorarioPage implements OnInit {

  @ViewChild('fp') filepicker; 
  @ViewChild('footer') footer;
  oldData: DataService;


  constructor(public formData: FormService, private navCtrl:NavController) { 
  }

  validarSeccion(){
    
    if(this.formData.seccionActual == 1){
      //this.formData = this.formDataTrue;
    }else if(this.formData.seccionActual == 2){
      
      if(!this.formData.dataFromExcel){
        this.footer.previous();
        this.filepicker.readFilePopup()
      }else if(this.formData.dataFromExcel[0].length==0){
        this.footer.previous();
        this.filepicker.readFilePopup()
      }
    }else if(this.formData.seccionActual == 3){
    }else if(this.formData.seccionActual == 4){
      if(confirm('Desea guardar el horario')){
        window.localStorage.clear()
        window.localStorage.data = JSON.stringify(this.formData);
        this.navCtrl.navigateRoot('inicio')
        window.location.replace('inicio')
      }else
        this.footer.previous();
      
    }
    return this.formData.seccionActual;
  }

  // Para cargar materias
  onChangeApro(selected, id) {
    this.formData.materiasAprobadas[id] = selected;
    // console.log(this.formData.materiasAprobadas);
    
  }

  onChangeSel(selected,id){
    console.log(this.formData.materiasSeleccionadas, selected);
    
    this.formData.materiasSeleccionadas[id] = selected;    
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
