import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from '../../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Input() ultimo: number = 3;
  @Input() data: DataService;

  constructor() { console.log(this.data);
  }

  next(){
    console.log(this.data);
    if(this.data.seccionActual==1 && this.data.seleccionados.length==0){
      this.presentToast('Debes seleccionar alguna carrera')
    }else if(this.data.seccionActual==3 && (this.data.materiasSeleccionadas == undefined || this.data.materiasSeleccionadas.flat().length==0)){
      this.presentToast('Debes seleccionar al menos una materia')
    }else if(this.data.seccionActual==4 && this.data.toCalendar.length==0){
      this.presentToast('Debes seleccionar al menos una materia')
    }else{
      this.data.seccionActual++;
    }
  }
  
  previous(){
    this.data.seccionActual--;
  }

  validarSeccion(x: number) {
    return this.data.seccionActual === x + 5;
  }
  
  ngOnInit() {}

  async presentToast(msg="") {
    const toast = document.createElement('ion-toast');
    toast.message = msg;
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }

}
