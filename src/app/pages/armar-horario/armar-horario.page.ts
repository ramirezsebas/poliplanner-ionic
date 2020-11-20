import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-armar-horario',
  templateUrl: './armar-horario.page.html',
  styleUrls: ['./armar-horario.page.scss'],
})
export class ArmarHorarioPage implements OnInit {

  constructor(public data: DataService) { 
    
  }
  
  validarSeccion(){
    return this.data.validarSeccion();
  }

  onClick(){
    console.log(this.data.seccionesElegidas);
    
  }

  ngOnInit() {
  }

}
