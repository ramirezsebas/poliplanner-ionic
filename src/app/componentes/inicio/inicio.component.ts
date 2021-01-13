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
    

    // Get data from 
    let data = window.localStorage.getItem('toInicio')
    if (data) {
      formatearDatos(); 
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
      console.log(JSON.parse(semana));
      
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
    //console.log(this.content);
    
    //this.content.scrollToTop;
  }

}
