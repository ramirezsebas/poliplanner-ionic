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

  constructor(public dataTrue: DataService,private navCtrl:NavController) { 
    
  }

  validarSeccion(){
    //console.log(this.data);
    
    if(this.data.seccionActual == 1){
      //this.data = this.dataTrue;
    }else if(this.data.seccionActual == 7){
      //this.dataTrue = this.data;
      this.navCtrl.navigateRoot('inicio')
    }
    return this.data.validarSeccion();
  }

  onClick(){
    console.log(this.data.seccionesElegidas);
    
  }

  ngOnInit() {
    this.data= new DataService()

    //console.log('data:' ,this.data.seleccionados);
    
  }

}
