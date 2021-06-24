import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-seleccionar-materias-aprobadas',
  templateUrl: './seleccionar-materias-aprobadas.component.html',
  styleUrls: ['./seleccionar-materias-aprobadas.component.scss'],
})
export class SeleccionarMateriasAprobadasComponent implements OnInit {

  @Input() data: DataService;

  constructor() {}

  ngOnInit() {
    this.data.esAprobar=true;
    // console.log(this.data.esAprobar);
  }

  onChange(selected, id) {
    this.data.materiasAprobadas[id] = selected;
  }

}
