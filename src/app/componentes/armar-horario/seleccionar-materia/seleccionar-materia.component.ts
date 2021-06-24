import { Component, OnInit, Input } from '@angular/core';
import Career from 'src/app/models/Career';
import { FormService } from 'src/app/services/form.service';
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
    private formData: FormService
  ){
    // console.log(this.formData);
    
  }
  
  ngOnInit(): void {
    // console.log(this.formData);

    this.materias=this.formData.carreras;
    this.seccionInicial = this.formData.seccionActual;
  }

  onChange(selected,id){
    console.log('hola',selected,id);
    
    this.formData.materiasSeleccionadas[id] = selected;    
  }
}
