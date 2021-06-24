import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Career from 'src/app/models/Career';
import { FormService } from 'src/app/services/form.service';
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
  
  constructor( private fpuna: FpunaService, private formData: FormService) { 
    
    this.initData();
  }

  ngOnInit() {
    // console.log(this.formData);
    this.seleccionados = this.formData.carreras;

  }

  initData() {
    this.fpuna.getCarrerasAll().subscribe((r) => {
      this.careers = r.map(x=> ({...x, 'isChecked': false }));
      // console.log(JSON.stringify(this.careers))
      // console.log(this.careers);
    });
    
  }

  onChange() {
    this.formData.carreras = this.careers.filter(x=>x.isChecked);
    // console.log(this.formData.seleccionados);
    
  }
}