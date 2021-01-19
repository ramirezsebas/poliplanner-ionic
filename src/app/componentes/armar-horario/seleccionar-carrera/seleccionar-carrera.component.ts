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
  @Input() data: DataService;
  carreraElegida;

  
  careers: any[];
  
  constructor( private fpuna: FpunaService) { 
    
    this.initData();
  }

  ngOnInit() {
    console.log(this.data);
    this.seleccionados = this.data.seleccionados;

  }

  initData() {
    this.fpuna.getCarrerasAll().subscribe((r) => {
      this.careers = r.map(x=> ({...x, 'isChecked': false }));
    });
  }

  onChange(e) {
    let id = e.detail.value;
    
    
    console.log(e.detail.value);
    console.log(this.careers);
    console.log(this.data.seleccionados);
    
    
    this.data.seleccionados = this.careers.filter(x=>x._id==id);
    console.log(this.data);
    
  }

}
