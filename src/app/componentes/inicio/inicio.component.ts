import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';
import { DataService } from '../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  semana = [
    {nombre:"Lunes", clases:[],},
    {nombre:"Martes", clases:[],},
    {nombre:"Mi­ércoles", clases:[],},
    {nombre:"Jueves", clases:[],},
    {nombre:"Viernes", clases:[],},
    {nombre:"Sábado", clases:[],},
  ];
  constructor(
    public modalController: ModalController, 
    public data: DataService
  ) { 
    this.init();
  }

  ngOnInit() { }

  /**
   * Inicio
   */

  init() {

    console.log('hoola');
    

    const formatearDatos=()=>{
      const columnNameFix = (x) => {
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
      this.data.seccionesElegidasForView.forEach(element => {
        element.hijos.forEach(clase => {
          if (clase.isItemChecked) {
            let itemselected = this.data.seccionesElegidas.find(x => {
              return clase.id === x['Item'];
            })
            toCalendar.push(itemselected)
          }
        });
      });
      console.log('tocalendar', toCalendar);
      
      //toCalendar = columnNameFix(toCalendar)
      console.log('toCalendar', toCalendar);
      window.localStorage.clear()
      window.localStorage['toInicio'] = JSON.stringify(toCalendar);
    }

    console.log('this.data.seccionesElegidasForView', this.data.seccionesElegidasForView);
    console.log('this.data.seccionesElegidas', this.data.seccionesElegidas);
    
    formatearDatos(); 

    // Get data from 
    let data = window.localStorage.getItem('toInicio')
    if (data) {
      console.log(JSON.parse(data));
      let a = JSON.parse(data)

      a.forEach(element => {
        this.semana.forEach(dia => {
          console.log('elementos',element);
          console.log(dia.nombre);
          let nombreIndex = dia.nombre

          if (element[nombreIndex] && element[nombreIndex].Horario )
            dia.clases.push({
              horario: element[nombreIndex].Horario.replace("-", "a"),
              nombre: element.Asignatura,
            });
        })
      });
      window.localStorage.clear()
      window.localStorage['toCalendar'] = data
      window.localStorage['semana'] = JSON.stringify(this.semana)
      console.log(this.semana);

    } else {
      let semana = window.localStorage.getItem("semana");
      if (semana) {
        this.semana = JSON.parse(semana);
      }
    }
  }

  /**
   * Html Controllers
   */
  segmentChanged(ev: any, slides: any) {
    slides.slideTo(ev.detail.value);
  }

  async ionSlideDidChange(ev: any, segment: any, slides: any) {
    let index = await slides.getActiveIndex();
    segment.value = index;
    let active = segment.el.childNodes[index];
    active.scrollIntoView({ behavior: "smooth", inline: "center" });
  }

  @ViewChild(IonContent, { static: false }) content: IonContent;
  async onSlideChanged(): Promise<void> {
    this.content.scrollToTop();
  }

}
