import { Component, OnInit, Input } from '@angular/core';
import { FpunaService } from '../../../fpuna.service';
import { DataService } from '../../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-seleccionar-materia',
  templateUrl: './seleccionar-materia.component.html',
  styleUrls: ['./seleccionar-materia.component.scss'],
})
export class SeleccionarMateriaComponent implements OnInit {
  seccionInicial: number;
  seleccionados;
  materias: import("/home/fer/Documentos/projects/poliplaner-ionic/poliplanner/src/app/servicios/armar-horario/data.service").career[];
  
  constructor(public data:DataService){
    this.materias=data.seleccionados;
    this.seccionInicial = this.data.seccionActual;
    this.data.esAprobar=false;
  }
  
  ngOnInit(): void {
  }

  onChange(selected,id){
    this.data.materiasSeleccionadas[id] = selected;    
  }
}
