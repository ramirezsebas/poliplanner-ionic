import { Component, OnInit } from '@angular/core';
import { DataService, career } from '../../services/data.service';

@Component({
  selector: 'app-sel-mat-aprob',
  templateUrl: './sel-mat-aprob.component.html',
  styleUrls: ['./sel-mat-aprob.component.scss'],
})
export class SelMatAprobComponent implements OnInit {
  paso: number;
  carrerasElegidas: career[];
  indiceCarrera: any;

  constructor(public data: DataService) { 
    this.paso = this.data.seccionActual;
    this.carrerasElegidas = this.data.seleccionados;
    console.log('carreras elegidas', this.carrerasElegidas);
    
  }

  ngOnInit() {}

  onChange(selected, id) {
    this.data.materiasAprobadas[id] = selected;
  }

}
