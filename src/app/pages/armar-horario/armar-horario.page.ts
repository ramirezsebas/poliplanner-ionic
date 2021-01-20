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
      console.log('data', this.data);
      
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

  ngOnInit() {
    this.data= new DataService()

    //console.log('data:' ,this.data.seleccionados);
    
  }


}
