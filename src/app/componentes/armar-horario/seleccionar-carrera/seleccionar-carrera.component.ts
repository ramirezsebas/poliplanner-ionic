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

  
  careers: any[];
  
  constructor( private fpuna: FpunaService) { 
    
    this.initData();
  }

  ngOnInit() {
    // console.log(this.data);
    this.seleccionados = this.data.seleccionados;

  }

  initData() {
    this.fpuna.getCarrerasAll().subscribe((r) => {
      this.careers = r.map(x=> ({...x, 'isChecked': false }));
      // console.log(JSON.stringify(this.careers))
      if(this.data.seleccionados.length!=0){
        this.data.seleccionados.forEach(carrera=>{
          this.careers.find(c=>c._id==carrera._id).isChecked = carrera.isChecked 
        })
      }
      // console.log(this.careers);
    });
    
  }

  onChange() {
    this.data.seleccionados = this.careers.filter(x=>x.isChecked);
    // console.log(this.data.seleccionados);
    
  }
}