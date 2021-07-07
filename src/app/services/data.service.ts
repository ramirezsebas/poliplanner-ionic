import { Injectable } from '@angular/core';
import { DayConfig } from 'ion2-calendar';
import Career from '../models/Career';
import Schedule from '../models/Schedule';
import { ExcelService } from './excel.service';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  dataFromExcel: any[];
  clasesTodas: any;
  toCalendar:Schedule[]=[];
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


  remplazarDatos(datos: DataService){
    this.dataFromExcel = datos.dataFromExcel;
    this.clasesTodas = datos.clasesTodas;
    this.toCalendar = datos.toCalendar;
    this.semana = datos.semana;
    this.eventosMes = datos.eventosMes;
    this.diasMarcados = datos.diasMarcados;



  }

  // initialize() {
  //   const nuevo = new DataService() ;
  //   this.remplazarDatos(nuevo)
  // }
  
  constructor(
    private formData: FormService
  ) { 
    this.init();
  }

  init(){
    let datos = window.localStorage.data
    if(datos){
      this.remplazarDatos(JSON.parse(datos) as DataService)
      // console.log(this.toCalendar); 
    }else{
      this.toCalendar = this.formData.toCalendar
      // if( this.data.toCalendar.length == 0 )
      //   this.navCtrl.navigateForward('armar-horario')
    }
    // console.log(this.data)

  }

}
