import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-armar-horario',
  templateUrl: './armar-horario.page.html',
  styleUrls: ['./armar-horario.page.scss'],
})
export class ArmarHorarioPage implements OnInit {

  data = new DataService;

  constructor(public dataTrue: DataService, private navCtrl:NavController) { 
    
  }

  validarSeccion(){
    
    if(this.data.seccionActual == 1){
      //this.data = this.dataTrue;
    }else if(this.data.seccionActual == 8){
      
      this.dataTrue.remplazarDatos(this.data)
      window.localStorage.clear()
      window.localStorage.data = JSON.stringify(this.data);
      this.navCtrl.navigateRoot('inicio')
      window.location.replace('inicio')
    }
    return this.data.validarSeccion();
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

  ionViewWillEnter(){
    console.log('hola');
    
  }

  ngOnInit() {
    this.data= new DataService()

    //console.log('data:' ,this.data.seleccionados);
    
  }


}
