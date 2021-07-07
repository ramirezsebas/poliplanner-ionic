import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: "page-secciones",
  templateUrl: "./secciones.page.html",
  styleUrls: ["./secciones.page.scss"],
})
export class SeccionesPage {
  constructor(public data: DataService) {
    console.log(this.data.toCalendar);
  }
}
