import { Injectable } from '@angular/core';

export interface career {
  _id: number,
  code: string,
  enf: string,
  name: string,
  isChecked?: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  validarSeccion() {
    if(this.seccionActual==1)
      return 1;
    else if (this.seccionActual - this.seleccionados.length < 2){
      this.offset = this.seleccionados.length;
      console.log(`seccion actual ${this.seccionActual}, retorno: ${2}`);
      
      return 2;
    } else if (this.seccionActual - (2*this.seleccionados.length) < 2){
      this.offset = 2* this.seleccionados.length;
      console.log(`seccion actual ${this.seccionActual}, retorno: ${3}`);
      return 3;
    }else{
      console.log(`seccion actual ${this.seccionActual}, retorno: ${this.seccionActual - this.offset + 2}`);
      
      return this.seccionActual - this.offset + 2;

    }
  }

  seleccionados: career[]=[];
  seccionActual: number=1;
  materiasSeleccionadas: string[][] = Array(24);
  materiasAprobadas: string[][] = Array(24);
  offset: number;
  secciones: string[]=[];
  dataFromExcel: any[];
  esAprobar: boolean =true;
  clasesTodas: any;
  seccionesElegidas: any;
  seccionesElegidasForView: any;
  
  constructor() { }

}
