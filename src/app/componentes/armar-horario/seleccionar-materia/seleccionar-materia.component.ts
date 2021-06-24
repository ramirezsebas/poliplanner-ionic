import { Component, OnInit, Input } from '@angular/core';
import Career from 'src/app/models/Career';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-seleccionar-materia',
  templateUrl: './seleccionar-materia.component.html',
  styleUrls: ['./seleccionar-materia.component.scss'],
})
export class SeleccionarMateriaComponent implements OnInit {
  seccionInicial: number;
  seleccionados;
  materias: Career[];
  
  constructor(
    private data: DataService
  ){
    // console.log(this.data);
    
  }
  
  ngOnInit(): void {
    // console.log(this.data);

    this.materias=this.data.seleccionados;
    this.seccionInicial = this.data.seccionActual;
  }

  onChange(selected,id){
    this.data.materiasSeleccionadas[id] = selected;    
  }
}
