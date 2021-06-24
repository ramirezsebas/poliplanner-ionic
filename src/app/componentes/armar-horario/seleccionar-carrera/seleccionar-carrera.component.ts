import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Career from 'src/app/models/Career';
import { FpunaService } from 'src/app/services/fpuna.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-seleccionar-carrera',
  templateUrl: './seleccionar-carrera.component.html',
  styleUrls: ['./seleccionar-carrera.component.scss'],
})
export class SeleccionarCarreraComponent implements OnInit {
  
  seleccionados: Career[];

  
  careers: any[];
  
  constructor( private fpuna: FpunaService, private data: DataService) { 
    
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
          this.careers.find(c=>c._id==carrera.id).isChecked = carrera.isChecked 
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