import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, DayConfig, CalendarComponent } from 'ion2-calendar';
import * as moment from "moment";
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalComponent } from '../../componentes/calendario/modal/modal.component';

@Component({
  selector: "app-page",
  templateUrl: "./calendario.page.html",
  styleUrls: ["./calendario.page.scss"],
})
export class CalendarioPage implements OnInit {
  ngOnInit() {}
}