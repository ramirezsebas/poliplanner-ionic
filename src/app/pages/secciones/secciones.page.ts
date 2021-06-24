import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: "page-secciones",
  templateUrl: "./secciones.page.html",
  styleUrls: ["./secciones.page.scss"],
})
export class SeccionesPage implements OnInit {
  constructor(public data: DataService) {
    
  }

  ngOnInit() {
    let datos = window.localStorage.data
    if(datos){
      this.data.remplazarDatos(JSON.parse(datos))
      // console.log(this.data.toCalendar);
    }
  }
}
