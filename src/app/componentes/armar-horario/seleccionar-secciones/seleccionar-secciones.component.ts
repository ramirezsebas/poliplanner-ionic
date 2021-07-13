import { Component, Input, OnInit } from "@angular/core";
import Career from "src/app/models/Career";
import Schedule from "src/app/models/Schedule";
import MatForView from "src/app/models/Views.model";
import { DataService } from "src/app/services/data.service";
import { FormService } from "src/app/services/form.service";

@Component({
  selector: "app-seleccionar-secciones",
  templateUrl: "./seleccionar-secciones.component.html",
  styleUrls: ["./seleccionar-secciones.component.scss"],
})
export class SeleccionarSeccionesComponent implements OnInit {
  clasesElegidasPorSecciones: Schedule[][] = [];
  clasesElegidasPorSeccionesForView: MatForView[] = [];

  // clasesElegidasPorSecciones: any[];
  // clasesElegidasPorSeccionesForView: any;

  constructor(public formData: FormService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    // console.log('hola');

    this.clasesElegidasPorSeccionesForView =
      this.formData.seccionesElegidasForView;
    const materiasSeleccionadas = this.formData.materiasSeleccionadas.filter(
      (x) => x
    );
    const carrerasSeleccionadas = this.formData.carreras;
    const datos = this.formData.dataFromExcel;

    const condicionDeFiltro = (
      clase: Schedule,
      nombre: string,
      enf: string
    ) => {
      let principioCoinc = clase.asignatura.name.match(RegExp("" + nombre));
      let esLaPalabra = clase.asignatura.name === nombre;
      let nombreCompleto = clase.asignatura.name[nombre.length] == " ";

      let enfasisCorrecto =
        //tieneEnfasisGnral  ...puede estar vacio :/
        typeof clase.career.enf === "undefined" ||
        clase.career.enf === "-- --" ||
        //tieneEnfasisEspecifico
        clase.career.enf.includes(enf);

      let finCoincide = esLaPalabra || nombreCompleto;
      let inicioCoincide =  principioCoinc

      return inicioCoincide && finCoincide && enfasisCorrecto;
    };

    // filtro materias desde del excel de acuerdo mat previamentes seleccionadas
    const fitroMateriasPorSeccion = (
      data: Schedule[],
      materiasSeleccionadas: string[],
      enfasis: string
    ) => {
      let todoLosDatos: Schedule[] = [];
      let agrupador: MatForView[] = materiasSeleccionadas.map((x) => {
        return {
          padre: x,
          sigla: "",
          enf: enfasis,
          hijos: [],
        };
      });

      // console.log('agrupador', agrupador);

      data.forEach((clase) => {
        // console.log(clase);

        materiasSeleccionadas.forEach((materia) => {
          try {
            if (condicionDeFiltro(clase, materia, enfasis)) {
              let index = agrupador.findIndex((x) => x.padre === materia);
              agrupador[index].sigla = clase.career.code;

              agrupador[index].hijos.push({
                id: clase.item,
                materia: clase.asignatura.name,
                especial: clase.asignatura.especial,
                def: clase.asignatura.def,
                seccion: clase.seccion,
                profesor: clase.docente.toShow(),
                isItemChecked: false,
              });

              todoLosDatos.push(clase);
            }
          } catch (error) {
            console.log(error);
          }
        });
      });
      // console.log(agrupador);

      return { all: todoLosDatos, forView: agrupador };
    };

    // console.log('datos', datos);
    // console.log('materiasSeleccionadas', materiasSeleccionadas);
    // console.log('carrerasSeleccionadas', carrerasSeleccionadas);
    this.clasesElegidasPorSecciones = [];
    const clasesElegidasPorSeccionesForView: MatForView[][] = [];
    if (!this.clasesElegidasPorSeccionesForView[0]) {
      for (let i = 0; i < carrerasSeleccionadas.length; i++) {
        console.log(datos, datos[i]);

        const datosDe1Carrera = datos[i];
        const carrera = carrerasSeleccionadas[i];
        const materias = materiasSeleccionadas[i];

        let r = fitroMateriasPorSeccion(datosDe1Carrera, materias, carrera.enf);
        this.clasesElegidasPorSecciones.push(r.all);
        clasesElegidasPorSeccionesForView.push(r.forView);
      }

      this.clasesElegidasPorSeccionesForView = clasesElegidasPorSeccionesForView
        .flat()
        .sort((x, y) => (x.padre < y.padre ? 1 : -1));

      this.formData.seccionesElegidasForView =
        this.clasesElegidasPorSeccionesForView;
      this.formData.seccionesElegidas = this.clasesElegidasPorSecciones.flat();
    }
    console.log("Clases ele por secciones", this.clasesElegidasPorSecciones);
    console.log(
      "Clases ele por secciones for view",
      this.clasesElegidasPorSeccionesForView
    );
    this.clasesElegidasPorSeccionesForView.sort((x, y) =>
      x.padre > y.padre ? 1 : -1
    );
    this.formData.toCalendar.forEach((mat) => {
      mat.item;
      this.clasesElegidasPorSeccionesForView.forEach((padre) => {
        padre.hijos.forEach((seccion) => {
          if (mat.item == seccion.id) {
            seccion.isItemChecked = true;
          }
        });
      });
    });
  }

  onChange() {
    // console.log(this.clasesElegidasPorSeccionesForView);
    // console.log('chau');
    this.formData.toCalendar = [];
    this.formData.seccionesElegidasForView.forEach((element) => {
      element.hijos.forEach((clase) => {
        if (clase.isItemChecked) {
          let itemselected = this.formData.seccionesElegidas.find((x) => {
            return clase.id === x.item;
          });
          this.formData.toCalendar.push(itemselected);
        }
      });
    });
    // console.log(this.formData.toCalendar);
  }

  ngOnDestroy() {}
}
