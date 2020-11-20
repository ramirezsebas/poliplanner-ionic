import { Component, OnInit, NgModule } from '@angular/core';
import { AlertController } from "@ionic/angular";

import * as XLSX from "xlsx";
import { Router } from '@angular/router';
import { FpunaService } from '../../services/fpuna.service';

@Component({
  selector: "app-cargar-horario",
  templateUrl: "./cargar-horario.page.html",
  styleUrls: ["./cargar-horario.page.scss"],
})
export class CargarHorarioPage implements OnInit {
  careers: any[];
  selectedCareer: any[];
  semestersClasses: any[];

  currentSection = {
    number: 1,
    nextPageVisibility: true,
    prePageVisibility: false,
  };
  seletedClassName: any;
  FileName: string;
  classes: any[];
  dataFromExcel: any[];
  selectedClass: any[];
  selectedClassForView: any[];

  constructor(
    private fpuna: FpunaService,
    private alertController: AlertController,
    private router: Router,
  ) {
    this.initialize();
  }

  initialize() {
    this.getData();
  }

  /*
   *  Seccion 1
   */

  getData() {
    this.fpuna.getCarrerasAll().subscribe((r) => {
      this.careers = r;
      console.log(r);
    });
  }

  onChange() {
    let toNextPage = [];
    this.careers.forEach((element) => {
      if (element.isChecked) {
        toNextPage.push({
          code: element.code,
          enf: element.enf,
          id: element._id,
        });
      }
    });
    this.selectedCareer = toNextPage;
    console.log("tonextpage", toNextPage);
  }

  /**
   ***  Seccion 2
   ***/

  loadSection2() {
    let selectedCareer = this.selectedCareer[0].id;
    console.log("this.selectedCareer", this.selectedCareer);

    this.fpuna.getClasesAll().subscribe((r) => {
      let c = [];
      //Transformar formato a [{'materias':{'materias':[],'isChecked'=false}}]
      r.forEach((x) => {
        if (x.career_id == selectedCareer) {
          if (!c[x.semester - 1]) c[x.semester - 1] = { materias: [] };
          let aux = { nombre: x.name  };
          c[x.semester - 1].materias.push(aux);
        }
      });
      this.semestersClasses = c;
      console.log('this.semestersClassse', c);
      
    });
  }

  checkCheckbox(ev: Event, index: number) {
    setTimeout(() => {
      this.semestersClasses[index].materias.forEach((materia) => {
        materia["isItemChecked"] = this.semestersClasses[index].checkParent;
      });
    });
  }

  verifyEvent(index: number) {
    const allItems = this.semestersClasses[index].materias.length;
    let selected = 0;

    this.semestersClasses[index].materias.map((item) => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.semestersClasses[index].indeterminateState = true;
      this.semestersClasses[index].checkParent = false;
    } else if (selected == allItems) {
      // All item selected
      this.semestersClasses[index].checkParent = true;
      this.semestersClasses[index].indeterminateState = false;
    } else {
      // No item is selected
      this.semestersClasses[index].indeterminateState = false;
      this.semestersClasses[index].checkParent = false;
    }
  }

  /**
   ***   Seccion 3
   ***/
  loadSection3() {
    this.seletedClassName = filterClass(this.semestersClasses);

    // Filtra las materias que sean seleccionado y lo retorna
    //como array de strings
    function filterClass(array) {
      let aux = [];
      array.forEach((semestre) => {
        semestre.materias.forEach((materia) => {
          if (materia.isItemChecked) aux.push(materia.nombre);
        });
      });
      return aux;
    }
  }

  async readFilePopup() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Seleccionar Horario",
      message: "<button>Message <strong>text</strong></button>!!!",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Buscar",
          handler: () => {
            document.getElementById("file-input").click();
          },
        },
      ],
    });

    await alert.present();
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;

    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      let careerEnf = this.selectedCareer[0];
      this.dataFromExcel = read(bstr,careerEnf);
      console.log('Class Name', this.seletedClassName);
      this.selectedCareer
      let r = selectCustomClass(
        this.dataFromExcel, 
        this.seletedClassName,
        careerEnf
      );
      this.selectedClass = r.all
      this.selectedClassForView = r.forView
      console.log('selectedClass',this.selectedClass);      
    };
    this.FileName = target.files[0].name;
    reader.readAsBinaryString(target.files[0]);

    function read(bstr: string, selectedCareer: any) {
      /* read workbook */
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });

      /* grab first sheet */
      const wsname: string = selectedCareer.code;
      console.log("sheet", wsname);

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      let data = [];
      /* save data */
      data = <any>XLSX.utils.sheet_to_json(ws, { header: 1, range: 11 });
      // this.dataToExport = wb;
      // this.export();
      return data;
    }

    function selectCustomClass(data,name,careerEnf) {
      let resultado = []
      let agrupador = []
      data.forEach(clase => {
        name.forEach(nombre => {
          if(condicionDeSeleccion(clase,nombre,careerEnf.enf)){
            let index = agrupador.findIndex((x) => x.padre === nombre);
            if(index==-1)
              index =
                agrupador.push({
                  padre: nombre,
                  sigla: clase["5"],
                  enf: careerEnf.enf,
                  hijos: [],
                }) - 1;

            agrupador[index].hijos.push({
              id: clase['0'],
              nombre: clase["2"].split('(*)')[0].split('-')[1],
              def:clase["2"].split('(*)')[1],
              seccion: clase["9"],
              profesor: `${clase["10"]} ${clase["12"]} ${clase["11"]}`,
            });

            resultado.push(clase)
          }
        });
      });
      console.log(agrupador);
      
      return {'all':resultado, 'forView':agrupador};

      function condicionDeSeleccion(clase, nombre, enf) {
        
        let principioCoinc = clase['2'].includes(nombre);
        let esLaPalabra = clase['2'] === nombre;
        let nombreCompleto = clase['2'][nombre.length] == " ";
        
        let enfasisCorrecto =
          //tieneEnfasisGnral  ...puede estar vacio :/
          typeof clase["6"] === "undefined" ||
          clase["6"] === "-- --" ||
          //tieneEnfasisEspecifico
          clase["6"].includes(enf);
        

        let finCoincide= esLaPalabra || nombreCompleto

        return principioCoinc && finCoincide && enfasisCorrecto
      }
    }
      
    
  }

  /**
   ***   Footer
   ***/

  nextPage() {
    this.currentSection.number++;
    this.currentSection.prePageVisibility = true;
    switch (this.currentSection.number) {
      case 2:
        this.loadSection2();
        break;
      case 3:
        this.readFilePopup();
        this.loadSection3();
        break;
      case 4:
        this.endPage();
        this.router.navigate(["/"]);
      default:
        break;
    }
  }

  previousPage() {
    this.currentSection.number--;
    if (this.currentSection.number == 1) {
      this.currentSection.prePageVisibility = false;
    }
  }

  endPage(){
    console.log('selectedClass',this.selectedClass)
    console.log('selectedClass',JSON.stringify(this.selectedClass));
    console.log('selectedClassForView',this.selectedClassForView)
    console.log('selectedClassForView',JSON.stringify(this.selectedClassForView));

    let toCalendar=[];
    this.selectedClassForView.forEach(element => {
      element.hijos.forEach(clase => {
        if (clase.isItemChecked) {
          let itemselected = this.selectedClass.find(x=>{
            return clase.id === x['0']
          })
          toCalendar.push(itemselected)
        }
      });
    });
    toCalendar = columnNameFix(toCalendar)
    console.log('toCalendar',toCalendar);
    window.localStorage.clear()
    window.localStorage['toInicio'] = JSON.stringify(toCalendar);

    function columnNameFix(x) {
      let r=[];
      x.forEach(element => {
        r.push({
          item: element['0'],
          dpto: element['1'],
          asignatura: element['2'],
          nivel: element['3'],
          sem: element['4'],
          sigla: element['5'],
          enfasis: element['6'],
          plan: element['7'],
          turno: element['8'],
          seccion: element['9'],
          tit: element['10']	,
          apellido: element['11']	,
          nombre: element['12'],
          '1p': {
            dia: element['13'],
            hora: element['14'],
            aula: element['15'],
          },
          '2p': {
            dia: element['16'],
            hora: element['17'],
            aula: element['18'],
          },
          '1f': {
            dia: element['19'],
            hora: element['20'],
            aula: element['21'],
          },
          '2f': {
            dia: element['22'],
            hora: element['23'],
            aula: element['24'],
          },
          "lunes":{
            aula: element['25'],
            horario: element['26'],
          },
          "martes":{
            aula: element['27'],
            horario: element['28'],
          },
          "miercoles":{
            aula: element['29'],
            horario: element['30'],
          },
          "jueves":{
            aula: element['31'],
            horario: element['32'],
          },
          "viernes":{
            aula: element['33'],
            horario: element['34'],
          },
          "sabado":{
            aula: element['35'],
            horario: element['36'],
            noche: ""
          },
        })
      });
      return r
    }
  }

  ngOnInit() {}
}
