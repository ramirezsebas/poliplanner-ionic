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

  constructor() { 
    // console.log(this.data);
  }

  next(){
    // console.log(this.data.seleccionados.length, this.data.contadorCarrera);
    
    console.log(this.data);
    if(this.data.seccionActual==1){
      this.data.contadorCarrera = this.data.seleccionados.length;
      if(this.data.seleccionados.length==0){
        this.presentToast('Debes seleccionar al menos una Carrera')
        this.data.seccionActual--;
      }
    }else if(this.data.seccionActual==2 ){
      if(this.data.contadorCarrera>1){
        this.data.seccionActual--;
        this.data.contadorCarrera--;
      }else
       this.data.contadorCarrera = this.data.seleccionados.length;
    }else if(this.data.seccionActual==3 ){
      if(this.data.contadorCarrera>1){
        this.data.seccionActual--;
        this.data.contadorCarrera--;
      }else if((!this.data.materiasSeleccionadas || this.selectedMatOnAllCareer())){
        this.presentToast('Debes seleccionar al menos una Materia para cada Carrera')
        this.data.seccionActual--;
      }
    }else if(this.data.seccionActual==4 && this.data.toCalendar.length==0){
      this.presentToast('Debes seleccionar al menos una Sección')
      this.data.seccionActual--;
    }else{
    }
    this.data.seccionActual++;
  }
  selectedMatOnAllCareer(){
    // console.log(this.data.materiasSeleccionadas);
    for (const iterator of this.data.seleccionados) {
      if(!this.data.materiasSeleccionadas[iterator._id] || this.data.materiasSeleccionadas[iterator._id].length==0)
      return true 
    }
    return false
  }
  
  previous(){
    if(this.data.seccionActual==2 ){
      if(this.data.contadorCarrera < this.data.seleccionados.length){
        this.data.seccionActual++;
        this.data.contadorCarrera++;
      }else{
        this.data.contadorCarrera=1
      }
    }else if(this.data.seccionActual==3 ){
      if(this.data.contadorCarrera < this.data.seleccionados.length){
        this.data.seccionActual++;
        this.data.contadorCarrera++;
      }else{
        this.data.contadorCarrera=1
      }
    }
    this.data.seccionActual--;
  }

  validarSeccion(x: number) {
    return this.data.seccionActual === x + 5;
  }
  
  ngOnInit() {}

  async presentToast(msg="") {
    const toast = document.createElement('ion-toast');
    toast.message = msg;
    toast.position = 'middle'
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }

}
