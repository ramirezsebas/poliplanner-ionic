import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sel-secciones',
  templateUrl: './sel-secciones.component.html',
  styleUrls: ['./sel-secciones.component.scss'],
})
export class SelSeccionesComponent implements OnInit {
  clasesElegidasPorSeccionesForView: any;

  constructor(public data: DataService) {
    this.clasesElegidasPorSeccionesForView = this.data.selSeccionesInit();
  }

  ngOnInit() {}


  onChange() {
    console.log(this.clasesElegidasPorSeccionesForView);
    console.log('todas:' , this.data.dataFromExcel);
    
    const columnNameFix = (x)=>{
      let r = [];
      x.forEach(element => {
        r.push({
          item: element['0'],
          dpto: element['1'],
          asignatura: element['2'],
          nivel: element['3'],
          sem: element['4'],
          sigla: element['5'],
          enfasis: element['6'],
          plan: element['7'],
          turno: element['8'],
          seccion: element['9'],
          tit: element['10'],
          apellido: element['11'],
          nombre: element['12'],
          '1p': {
            dia: element['13'],
            hora: element['14'],
            aula: element['15'],
          },
          '2p': {
            dia: element['16'],
            hora: element['17'],
            aula: element['18'],
          },
          '1f': {
            dia: element['19'],
            hora: element['20'],
            aula: element['21'],
          },
          '2f': {
            dia: element['22'],
            hora: element['23'],
            aula: element['24'],
          },
          "lunes": {
            aula: element['25'],
            horario: element['26'],
          },
          "martes": {
            aula: element['27'],
            horario: element['28'],
          },
          "miercoles": {
            aula: element['29'],
            horario: element['30'],
          },
          "jueves": {
            aula: element['31'],
            horario: element['32'],
          },
          "viernes": {
            aula: element['33'],
            horario: element['34'],
          },
          "sabado": {
            aula: element['35'],
            horario: element['36'],
            noche: ""
          },
        })
      });
      return r
    }
    
    let toCalendar = [];
    let clasesTodas = this.data.dataFromExcel.flat();
    this.clasesElegidasPorSeccionesForView.forEach(element => {
      element.hijos.forEach(clase => {
        if (clase.isItemChecked) {
          let itemselected = clasesTodas.find(x => clase.id == x['0'])
          toCalendar.push(itemselected)
        }
      });
    });
    toCalendar = columnNameFix(toCalendar);
    this.data.clasesElegidas = toCalendar;
  }

}
