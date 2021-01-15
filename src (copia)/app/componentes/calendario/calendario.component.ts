import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { PopoverController } from '@ionic/angular';

import * as moment from "moment";
import { DayConfig, CalendarComponentOptions } from '../ion2-calendar/calendar.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {

  @Input() data: DataService;
  
  date: string;
  type: "string"; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  diasMarcados: DayConfig[] = [];
  optionsMulti: CalendarComponentOptions = {
    weekdays: ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"],
    from: new Date(2020),
    color: "primary",
    daysConfig: this.diasMarcados
  };
  eventosMes = [];
  currentMes: number;
  mostrarCalendario: boolean;

  constructor(
    private popoverController: PopoverController,
  ){
    //Para tener los meses en espanhol
    moment.locale("es-es");

    this.mostrarCalendario = false;

    this.currentMes = 7;
    this.iniciar();
    this.mostrarCalendario = true;
  }

  iniciar() {
    [this.eventosMes, this.optionsMulti["daysConfig"]] = this.data.getEventosMes();
    console.log(this.optionsMulti);

  }

  monthChange(e) {
    console.log(e);
    this.currentMes = e.newMonth.months;
    console.log();

  }

  onChange($event) {
    let fecha: Date = $event._d
    let day = fecha.getDate() < 10 ? "0" + fecha.getDate() : fecha.getDate().toString();
    let month = (fecha.getMonth() + 1) < 10 ? "0" + (fecha.getMonth() + 1) : (fecha.getMonth() + 1).toString();
    let year = fecha.getFullYear().toString().substr(2, 3)
    let fechaFormateada = `${day}/${month}/${year}`;
    console.log(fechaFormateada);
    console.log('da', this.eventosMes);

    let eventosPorMostrar = []
    this.eventosMes[fecha.getMonth() + 1].forEach(element => {
      if (element.fecha.includes(fechaFormateada)) {
        eventosPorMostrar.push(element);
      }
    });
    console.log(eventosPorMostrar);

    if (eventosPorMostrar.length)
      this.presentModal(eventosPorMostrar, fechaFormateada, $event)
    console.log($event);
  }

  async presentModal(eventosPorMostrar, fechaActual, e) {
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
