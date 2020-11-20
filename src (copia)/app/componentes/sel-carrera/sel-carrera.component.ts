import { Component, OnInit } from '@angular/core';
import { career, DataService } from 'src/app/services/data.service';
import { FpunaService } from 'src/app/services/fpuna.service';

@Component({
  selector: 'app-sel-carrera',
  templateUrl: './sel-carrera.component.html',
  styleUrls: ['./sel-carrera.component.scss'],
})
export class SelCarreraComponent implements OnInit {
  
  seleccionados: career[];

  careers: any[];
  paso: number;

  constructor(private fpuna: FpunaService, public data: DataService) {
    this.paso = this.data.seccionActual;
    this.initData();
  }

  ngOnInit() { }

  initData() {
    this.fpuna.getCarrerasAll().subscribe((r) => {
      this.careers = r.map(x => ({ ...x, 'isChecked': false }));
    });
  }

  onChange() {  
    this.data.seleccionados = this.careers.filter(x => x.isChecked);
  }

}
