import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, DayConfig, CalendarComponent } from 'ion2-calendar';
import * as moment from "moment";
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalComponent } from '../../componentes/calendario/modal/modal.component';

@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.page.html",
  styleUrls: ["./calendario.page.scss"],
})
export class CalendarioPage implements OnInit {
  date: string;
  type: "string"; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  diasMarcados: DayConfig[] = [];
  optionsMulti: CalendarComponentOptions = {
    weekdays: ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"],
    from: new Date(2020),
    color: "primary",
    daysConfig: this.diasMarcados
  };
  eventosMes=[];
  currentMes: number;
  mostrarCalendario: boolean;

  constructor(private popoverController: PopoverController) {
    //Para tener los meses en espanhol
    moment.locale("es-es");

    this.mostrarCalendario = false;

    this.currentMes=7
  }

  ionViewWillEnter() {
    let data = window.localStorage.toCalendar;
    // [{tipo:"",materia:"",fecha:"",hora,""}]
    if(data){
      let datos_a_filtrar = JSON.parse(window.localStorage.toCalendar);

      let x=0;while(x++<13)this.eventosMes.push([])
      console.log(this);

      datos_a_filtrar.forEach(element => {
        
        let tipos = [
          "Primer Parcial",
          "Segundo Parcial",
          "Primer Final",
          "Segundo Final",
        ];
        let keys = ["1p", "2p","1f","2f"]
        for (const key in keys) {
          let index = parseInt(element[keys[key]].dia.split("/")[1]);
          this.eventosMes[index].push({
            tipo: tipos[key],
            materia: element["asignatura"],
            fecha: element[keys[key]].dia,
            hora: element[keys[key]].hora
          });
          marcarDia(this.diasMarcados, element[keys[key]].dia);
        }
      });

      delete window.localStorage['toCalendar'];
      window.localStorage['eventosMes'] = JSON.stringify(this.eventosMes);
      window.localStorage['diasMarcados'] = JSON.stringify(this.diasMarcados);
    } else {
      let eventosMes = window.localStorage.getItem("eventosMes");
      let diasMarcados = window.localStorage.getItem("diasMarcados");
      if (eventosMes) {
        console.log(this.diasMarcados);
        console.log('josn diasMarcados', JSON.parse(diasMarcados));
        
        
        this.eventosMes = JSON.parse(eventosMes);
        this.diasMarcados = JSON.parse(diasMarcados);
        console.log('this', this.diasMarcados);
        
      }
    }
    this.optionsMulti["daysConfig"] = this.diasMarcados;
    this.mostrarCalendario = true;
    console.log(this.optionsMulti);
    

    // Marcar dias
    function marcarDia(array,fecha: string) {
      console.log('fecha',fecha);
      
      let dia = parseInt(fecha[4] + fecha[5])
      let mes = parseInt(fecha[7] + fecha[8])
      let anho = parseInt("20"+fecha[10] + fecha[11])
      array.push({
        date: new Date(anho, mes - 1, dia),
        marked: true,
        cssClass: "markedDay",
      });
      
    }

  }

  monthChange(e){
    console.log(e);
    this.currentMes = e.newMonth.months;
    console.log();
    
  }

  onChange($event) {
    let fecha: Date = $event._d
    let day =  fecha.getDate()<10 ? "0"+fecha.getDate() : fecha.getDate().toString();
    let month = (fecha.getMonth()+1) < 10 ? "0" + (fecha.getMonth()+1) :( fecha.getMonth()+1).toString();
    let year = fecha.getFullYear().toString().substr(2,3)
    let fechaFormateada =`${day}/${month}/${year}`;
    console.log(fechaFormateada);
    console.log('da',this.eventosMes);
    
    let eventosPorMostrar=[]
    this.eventosMes[fecha.getMonth()+1].forEach(element => {
      if (element.fecha.includes(fechaFormateada)) {
        eventosPorMostrar.push(element);
      }
    });
    console.log(eventosPorMostrar);
    
    if(eventosPorMostrar.length)
      this.presentModal(eventosPorMostrar, fechaFormateada,$event)
    console.log($event);
  }

  async presentModal(eventosPorMostrar, fechaActual,e) {
    console.log('presentmodal', eventosPorMostrar);
    
    const popover = await this.popoverController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      // event: e,
      componentProps: {
        'eventosPorMostrar': eventosPorMostrar,
        'fechaActual': fechaActual,
      }
    });
    return await popover.present();
  }
  
  ngOnInit() {}
}