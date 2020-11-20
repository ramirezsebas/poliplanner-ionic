import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  indiceCarrera: number = 0;
  seleccionados: career[] = [];
  seccionActual: number = 1;
  materiasSeleccionadas: string[][] = Array(24);
  materiasAprobadas: string[][] = Array(24);
  offset: number;
  secciones: string[] = [];
  dataFromExcel: any[];
  esAprobar: boolean = true;
  clasesTodas: any;
  seccionesElegidas: any;
  seccionesElegidasForView: any;
  absoluteSeccion: number = 1;
  clasesElegidasPorSecciones: any[] = [];
  clasesElegidasPorSeccionesForView: any[] = [];
  clasesElegidas: any[];

  constructor() { }

  /**
   * Inicio
   */
  getSemana(): { nombre: string; clases: any[]; }[] {
    let eventosXMes  = [
      { nombre: "LUNES", clases: [], },
      { nombre: "MARTES", clases: [], },
      { nombre: "MIERCOLES", clases: [], },
      { nombre: "JUEVES", clases: [], },
      { nombre: "VIERNES", clases: [], },
      { nombre: "SABADO", clases: [], },
    ];
    // Get data from 
    let data = this.clasesElegidas;
    if (data) {
      data.forEach(element => {
        eventosXMes.forEach(dia => {
          console.log(element);
          console.log(dia.nombre);
          let nombreIndex = dia.nombre.toLowerCase()

          if (element[nombreIndex].horario)
            dia.clases.push({
              horario: element[nombreIndex].horario.replace("-", "a"),
              nombre: element.asignatura,
            });
          else if (nombreIndex === 'sabado' && element[nombreIndex].noche)
            dia.clases.push({
              horario: element[nombreIndex].noche,
              nombre: element.asignatura,
            });
        })
      });
      window.localStorage.clear()
      window.localStorage['toCalendar'] = data
      window.localStorage['semana'] = JSON.stringify(eventosXMes)
      console.log(eventosXMes);

    } else {
      let semana = window.localStorage.getItem("semana");
      if (semana) {
        eventosXMes = JSON.parse(semana);
      }
    }
    return eventosXMes;
  }

  /**
   * Calendario
   */
  getEventosMes() {
    let eventosXMes = [];
    let diasMarcados;
    let data = window.localStorage.toCalendar;

    const marcarDia = (array, fecha: string) => {
      console.log('fecha', fecha);

      let dia = parseInt(fecha[4] + fecha[5])
      let mes = parseInt(fecha[7] + fecha[8])
      let anho = parseInt("20" + fecha[10] + fecha[11])
      array.push({
        date: new Date(anho, mes - 1, dia),
        marked: true,
        cssClass: "markedDay",
      });

    }

    // [{tipo:"",materia:"",fecha:"",hora,""}]
    if (data) {
      let datos_a_filtrar = JSON.parse(window.localStorage.toCalendar);

      let x = 0; while (x++ < 13) eventosXMes.push([])

      datos_a_filtrar.forEach(element => {
        let tipos = [
          "Primer Parcial",
          "Segundo Parcial",
          "Primer Final",
          "Segundo Final",
        ];
        let keys = ["1p", "2p", "1f", "2f"]
        for (const key in keys) {
          let index = parseInt(element[keys[key]].dia.split("/")[1]);
          eventosXMes[index].push({
            tipo: tipos[key],
            materia: element["asignatura"],
            fecha: element[keys[key]].dia,
            hora: element[keys[key]].hora
          });
          marcarDia(diasMarcados, element[keys[key]].dia);
        }
      });

      delete window.localStorage['toCalendar'];
      window.localStorage['eventosMes'] = JSON.stringify(eventosXMes);
      window.localStorage['diasMarcados'] = JSON.stringify(diasMarcados);
    } else {
      let eventosMes = window.localStorage.getItem("eventosMes");
      let marcas = window.localStorage.getItem("diasMarcados");
      if (eventosMes) {
        eventosXMes = JSON.parse(eventosMes);
        diasMarcados = JSON.parse(marcas);
        console.log('this', marcas);

      }
    }
    return [eventosXMes, diasMarcados];
  }

  /**
   * Seleccionar secciones
   */

  selSeccionesInit() {
    const materiasSeleccionadas = this.materiasSeleccionadas.filter(x => x)
    const carrerasSeleccionadas = this.seleccionados;
    const datos = this.dataFromExcel;

    const condicionDeFiltro = (clase, nombre, enf) => {
      let principioCoinc = clase['2'].match(RegExp('' + nombre));
      let esLaPalabra = clase['2'] === nombre;
      let nombreCompleto = clase['2'][nombre.length] == " ";

      let enfasisCorrecto =
        //tieneEnfasisGnral  ...puede estar vacio :/
        typeof clase["6"] === "undefined" ||
        clase["6"] === "-- --" ||
        //tieneEnfasisEspecifico
        clase["6"].includes(enf);

      let finCoincide = esLaPalabra || nombreCompleto

      return principioCoinc && finCoincide && enfasisCorrecto
    }

    // filtro materias desde del excel de acuerdo mat previamentes seleccionadas 
    const fitroMateriasPorSeccion = (data, materiasSeleccionadas, enfasis) => {
      let agrupador = materiasSeleccionadas.map(x => {
        return {
          padre: x,
          sigla: '',
          enf: enfasis,
          hijos: [],
        }
      })

      console.log('agrupador', agrupador);


      data.forEach(clase => {
        materiasSeleccionadas.forEach(nombre => {
          if (condicionDeFiltro(clase, nombre, enfasis)) {
            let index = agrupador.findIndex(x => x.padre === nombre);
            agrupador[index].sigla = clase["5"];
            agrupador[index].hijos.push({
              id: clase['0'],
              nombre: clase["2"].split('(*)')[0].split('-')[1],
              def: clase["2"].split('(*)')[1],
              seccion: clase["9"],
              profesor: `${clase["10"]} ${clase["12"]} ${clase["11"]}`,
            });

            this.clasesElegidasPorSecciones.push(clase)
          }
        });
      });
      console.log(agrupador);

      return agrupador;
    }

    console.log('datos', datos);
    console.log('materiasSeleccionadas', materiasSeleccionadas);
    console.log('carrerasSeleccionadas', carrerasSeleccionadas);

    for (let i = 0; i < carrerasSeleccionadas.length; i++) {
      const datosDe1Carrera = datos[i];
      const carrera = carrerasSeleccionadas[i];
      const materias = materiasSeleccionadas[i];

      let r = fitroMateriasPorSeccion(datosDe1Carrera, materias, carrera.enf)
      this.clasesElegidasPorSeccionesForView.push(r)
    }

    this.clasesElegidasPorSeccionesForView = this.clasesElegidasPorSeccionesForView.flat().sort((x, y) => x.padre - y.padre);
    this.clasesElegidasPorSecciones = this.clasesElegidasPorSecciones.flat();

    return this.clasesElegidasPorSeccionesForView;
  }
  

  /**
   * Footer Controller
   */

  next(){
    this.absoluteSeccion++;
    if( this.seccionActual == 2 || this.seccionActual == 3 ){
      this.indiceCarrera++;
      if(this.indiceCarrera >= this.seleccionados.length){
        this.indiceCarrera = 0;
        this.seccionActual++;
      }
    }else{
      this.seccionActual++;
    }
    console.log(this.indiceCarrera);
    console.log(this.seccionActual);
    console.log(this.seleccionados.length);    
  }

  previous(){
    this.absoluteSeccion--;
    if( this.seccionActual == 2 || this.seccionActual == 3 ){
      this.indiceCarrera--;
      if(this.indiceCarrera <= 0){
        this.indiceCarrera = this.seleccionados.length;
        this.seccionActual--;
      }
    }else{
      this.seccionActual--;
    }

    console.log(this.indiceCarrera);
    console.log(this.seccionActual);
    console.log(this.seleccionados.length);

  }

  elementoAmostrar(): number {
    return this.seccionActual;
  }

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


}
