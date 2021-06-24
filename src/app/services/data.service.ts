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
  contadorCarrera: number;


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
