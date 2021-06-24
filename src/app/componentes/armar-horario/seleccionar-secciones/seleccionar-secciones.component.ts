import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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

  constructor(private data: DataService) {}

  ngOnInit() {
    this.init();
  }
  
  init(){
    // console.log('hola');
    
    this.clasesElegidasPorSeccionesForView = this.data.seccionesElegidasForView 
    const materiasSeleccionadas = this.data.materiasSeleccionadas.filter(x=>x)
    const carrerasSeleccionadas = this.data.seleccionados;
    const datos = this.data.dataFromExcel;
    

    const condicionDeFiltro = (clase, nombre, enf) => {
      let principioCoinc = clase['Asignatura'].match(RegExp('' + nombre));
      let esLaPalabra = clase['Asignatura'] === nombre;
      let nombreCompleto = clase['Asignatura'][nombre.length] == " ";

      let enfasisCorrecto =
        //tieneEnfasisGnral  ...puede estar vacio :/
        typeof clase["Enfasis"] === "undefined" ||
        clase["Enfasis"] === "-- --" ||
        //tieneEnfasisEspecifico
        clase["Enfasis"].includes(enf);

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

      // console.log('agrupador', agrupador);
      

      data.forEach(clase => {
        // console.log(clase);
        
        materiasSeleccionadas.forEach(materia => {
          try {
            
            if (condicionDeFiltro(clase, materia, enfasis)) {
              let index = agrupador.findIndex(x => x.padre === materia);
              agrupador[index].sigla = clase["Sigla carrera"];
              
              // Valindando si la materia tiene 2 o + profes
              let prof = [];
              let tit = clase['Tít'].split('\n')
              for(let i=0; i<tit.length; i++){
                prof.push(`${clase["Tít"].split('\n')[i]} ${clase["Nombre"].split('\n')[i]} ${clase["Apellido"].split('\n')[i]}`)
              }

              agrupador[index].hijos.push({
                id: clase['Item'],
                materia: clase["Asignatura"].split('(*)')[0].split('-')[0],
                especial: clase["Asignatura"].split('(*)')[0].split('-')[1],
                def: clase["Asignatura"].includes('(*)') ? '(*)': '',
                seccion: clase["Sección"],
                profesor: prof,
              });
  
              todoLosDatos.push(clase)
            }
            
          } catch (error) {
            
          }
        });
      });
      // console.log(agrupador);

      return { 'all': todoLosDatos, 'forView': agrupador };
    }

    // console.log('datos', datos);
    // console.log('materiasSeleccionadas', materiasSeleccionadas);
    // console.log('carrerasSeleccionadas', carrerasSeleccionadas);
    this.clasesElegidasPorSecciones = [];
    this.clasesElegidasPorSeccionesForView = [];
    if(!this.clasesElegidasPorSeccionesForView[0])
    {  
      for (let i = 0; i < carrerasSeleccionadas.length; i++) {
        const datosDe1Carrera = datos[i];
        const carrera = carrerasSeleccionadas[i];
        const materias = materiasSeleccionadas[i];
        
        let r = fitroMateriasPorSeccion(datosDe1Carrera,materias,carrera.enf)
        this.clasesElegidasPorSecciones.push(r.all)
        this.clasesElegidasPorSeccionesForView.push(r.forView)
      }

      this.clasesElegidasPorSeccionesForView = this.clasesElegidasPorSeccionesForView.flat().sort((x,y)=>x.padre<y.padre);

      this.data.seccionesElegidasForView = this.clasesElegidasPorSeccionesForView;
      this.data.seccionesElegidas = this.clasesElegidasPorSecciones.flat();
    }
    console.log('Clases ele por secciones', this.clasesElegidasPorSecciones);
    console.log('Clases ele por secciones for view', this.clasesElegidasPorSeccionesForView);
    this.clasesElegidasPorSeccionesForView.sort((x, y) => x.padre> y.padre?1:-1);
    this.data.toCalendar.forEach(mat => {
      mat.Item
      this.clasesElegidasPorSeccionesForView.forEach(padre => {
        padre.hijos.forEach(seccion => {
          if(mat.Item == seccion.id){
            seccion.isItemChecked = true          
          }
        });
      });
    })
   
  }

  onChange(){
    // console.log(this.clasesElegidasPorSeccionesForView);
    // console.log('chau');
    this.data.toCalendar= [];
    this.data.seccionesElegidasForView.forEach(element => {
      element.hijos.forEach(clase => {
        if (clase.isItemChecked) {
          let itemselected = this.data.seccionesElegidas.find(x => {
            return clase.id === x['Item'];
          })
          this.data.toCalendar.push(itemselected)
        }
      });
    });
    // console.log(this.data.toCalendar);
    
  }

  ngOnDestroy(){
   
    
  }

}
