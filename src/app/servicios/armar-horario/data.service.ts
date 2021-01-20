import { Injectable } from '@angular/core';
import { DayConfig } from 'ion2-calendar';

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
    const formatearDatos=()=>{

      
    }
    //console.log(this.seccionActual);
    
    if (this.seccionActual == 4){
      formatearDatos();
    }else if (this.seccionActual == 6){
      formatearDatos();
    }
    return this.seccionActual;

    //if(this.seccionActual==1)
    //  return 1;
    //else if (this.seccionActual - this.seleccionados.length < 2){
    //  this.offset = this.seleccionados.length;
    //  console.log(`seccion actual ${this.seccionActual}, retorno: ${2}`);
    //  
    //  return 2;
    //} else if (this.seccionActual - (2*this.seleccionados.length) < 2){
    //  this.offset = 2* this.seleccionados.length;
    //  formatearDatos()
//
    //  console.log(`seccion actual ${this.seccionActual}, retorno: ${3}`);
    //  return 3;
    //}else if(this.offset+2 > this.seccionActual){
    //  formatearDatos()
    //}else{
    //  console.log(`seccion actual ${this.seccionActual}, retorno: ${this.seccionActual - this.offset + 2}`);
    //  
    //  return this.seccionActual - this.offset + 2;
//
    //}
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
  seccionesElegidasForView: any= [];
  toCalendar:any=[];
  semana = [
    {nombre:"Lunes", clases:[],},
    {nombre:"Martes", clases:[],},
    {nombre:"Miércoles", clases:[],},
    {nombre:"Jueves", clases:[],},
    {nombre:"Viernes", clases:[],},
    {nombre:"Sábado", clases:[],},
  ];
  diasMarcados: DayConfig[] = [];
  eventosMes=[];


  remplazarDatos(datos){
    this.seleccionados = datos.seleccionados;
    this.seccionActual = datos.seccionActual;
    this.materiasSeleccionadas = datos.materiasSeleccionadas;
    this.materiasAprobadas = datos.materiasAprobadas;
    this.offset = datos.offset;
    this.secciones = datos.secciones;
    this.dataFromExcel = datos.dataFromExcel;
    this.esAprobar = datos.esAprobar;
    this.clasesTodas = datos.clasesTodas;
    this.seccionesElegidas = datos.seccionesElegidas;
    this.seccionesElegidasForView = datos.seccionesElegidasForView;
    this.toCalendar = datos.toCalendar;
    this.semana = datos.semana;
    this.eventosMes = datos.eventoMes;
    this.diasMarcados = datos.diasMarcados;



  }
  
  constructor() { }

}
