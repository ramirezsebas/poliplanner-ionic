import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/armar-horario/data.service';

@Component({
  selector: "page-secciones",
  templateUrl: "./secciones.page.html",
  styleUrls: ["./secciones.page.scss"],
})
export class SeccionesPage implements OnInit {
  constructor(public data: DataService) {
    console.log(data.toCalendar);
    
  }

  ngOnInit() {}
}
