import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FpunaService } from '../../../fpuna.service';
import { DataService, career } from '../../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-seleccionar-carrera',
  templateUrl: './seleccionar-carrera.component.html',
  styleUrls: ['./seleccionar-carrera.component.scss'],
})
export class SeleccionarCarreraComponent implements OnInit {
  
  seleccionados: career[];
  
  careers: any[];
  
  constructor( private fpuna: FpunaService, public data: DataService) { 
    this.initData();
    this.seleccionados = this.data.seleccionados;
  }

  ngOnInit() {}

  initData() {
    this.fpuna.getCarrerasAll().subscribe((r) => {
      this.careers = r.map(x=> ({...x, 'isChecked': false }));
    });
  }

  onChange() {
    console.log('da');
    
    this.data.seleccionados = this.careers.filter(x=>x.isChecked);
  }


}
