import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, DayConfig, CalendarComponent } from 'ion2-calendar';
import * as moment from "moment";
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalComponent } from '../../componentes/calendario/modal/modal.component';
import { DataService } from 'src/app/servicios/armar-horario/data.service';

@Component({
  selector: "app-page",
  templateUrl: "./calendario.page.html",
  styleUrls: ["./calendario.page.scss"],
})
export class CalendarioPage implements OnInit {
  constructor(public data: DataService){}
  ngOnInit() {
    // console.log(this.data);
    
  }
}