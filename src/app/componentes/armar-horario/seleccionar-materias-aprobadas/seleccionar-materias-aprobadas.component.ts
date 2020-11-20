import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-seleccionar-materias-aprobadas',
  templateUrl: './seleccionar-materias-aprobadas.component.html',
  styleUrls: ['./seleccionar-materias-aprobadas.component.scss'],
})
export class SeleccionarMateriasAprobadasComponent implements OnInit {

  constructor( private data: DataService) { 
    this.data.esAprobar=true;
    console.log(this.data.esAprobar);
    
  }

  ngOnInit() {}

  onChange(selected, id) {
    this.data.materiasAprobadas[id] = selected;
  }

}
