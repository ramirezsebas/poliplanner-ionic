import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-seleccionar-secciones',
  templateUrl: './seleccionar-secciones.component.html',
  styleUrls: ['./seleccionar-secciones.component.scss'],
})
export class SeleccionarSeccionesComponent implements OnInit {
  clasesElegidasPorSecciones: any=[];
  clasesElegidasPorSeccionesForView: any=[];
  // clasesElegidasPorSecciones: any[];
  // clasesElegidasPorSeccionesForView: any;

  constructor( private data: DataService) {
    this.init();
  }

  ngOnInit() {}
  
  init(){
    const materiasSeleccionadas = this.data.materiasSeleccionadas.filter(x=>x)
    const carrerasSeleccionadas = this.data.seleccionados;
    const datos = this.data.dataFromExcel;

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
    const fitroMateriasPorSeccion = (data, materiasSeleccionadas, enfasis)=>{
      let todoLosDatos = [];
      let agrupador = materiasSeleccionadas.map(x=>{
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

            todoLosDatos.push(clase)
          }
        });
      });
      console.log(agrupador);

      return { 'all': todoLosDatos, 'forView': agrupador };
    }

    console.log('datos', datos);
    console.log('materiasSeleccionadas', materiasSeleccionadas);
    console.log('carrerasSeleccionadas', carrerasSeleccionadas);

    for (let i = 0; i < carrerasSeleccionadas.length; i++) {
      const datosDe1Carrera = datos[i];
      const carrera = carrerasSeleccionadas[i];
      const materias = materiasSeleccionadas[i];
      
      let r = fitroMateriasPorSeccion(datosDe1Carrera,materias,carrera.enf)
      this.clasesElegidasPorSecciones.push(r.all)
      this.clasesElegidasPorSeccionesForView.push(r.forView)
    }

    this.clasesElegidasPorSeccionesForView = this.clasesElegidasPorSeccionesForView.flat().sort((x,y)=>x.padre<y.padre);

    console.log('Clases ele por secciones', this.clasesElegidasPorSecciones);
    console.log('Clases ele por secciones for view', this.clasesElegidasPorSeccionesForView);
    this.data.seccionesElegidasForView = this.clasesElegidasPorSeccionesForView;
    this.data.seccionesElegidas = this.clasesElegidasPorSecciones.flat();
  }

  onChange(){
    console.log(this.clasesElegidasPorSeccionesForView);
  }

}
