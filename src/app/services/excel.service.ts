import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import * as XLSX from "xlsx";


@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  wb: XLSX.WorkBook
  datosLimpios: any[];
  FileName: string;
  

  constructor(
    private data: DataService
  ) { }


  toData(target){


    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      /* read workbook */
      this.wb = XLSX.read(bstr, { type: "binary"});
      console.log(this.wb);
      
      this.processExcel()
      
      
    };
    this.FileName = target.files[0].name;
    console.log(this.FileName);
    
    reader.readAsBinaryString(target.files[0]);
    // return this.datosLimpios

  }

  processExcel() {
    let datos_sin_limpiar = this.read();
    //console.log(datos_sin_limpiar);
    this.datosLimpios = [];
    datos_sin_limpiar.forEach(dato => {
      this.datosLimpios.push(this.limpiarDatos(dato));
    });
    // return this.datosLimpios;
    this.data.dataFromExcel=this.datosLimpios;
  }


  private read = () => {

    /* grab sheets names */
    const codigosDeCarreras = this.data.seleccionados.flatMap(x=>x.code)
    console.log(this.data.seleccionados);
    

    /* save data */
    let data = [];
    for (const codigo of codigosDeCarreras) {
      console.log(codigo);
      
      const ws: XLSX.WorkSheet = this.wb.Sheets[codigo];
      data.push(
        <any>XLSX.utils.sheet_to_json(ws, { header: 1, range: 10, raw:false }),
      );
    }
    console.log(data);
    
    if(data[0].length==0) 
      throw Error('Invalid File')
    
    return data;
  }

  private limpiarDatos = (datos_sin_limpiar)=>{
    let datosLimpios = [];
    for (let i = 0; i < datos_sin_limpiar.length; i++) {
      let aux = {};
      let cont = 0;
      for (let j = 0; j < datos_sin_limpiar[i].length; j++) {
        let key = datos_sin_limpiar[0][j];      
        

        let diasKeys = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
        let esUnDia: boolean;
        diasKeys.forEach(dia => {
          if(dia ==  datos_sin_limpiar[0][j]){
            key = datos_sin_limpiar[0][j]
            let clase = {
              //'Aula': "",
              'Horario': "",
            };
            //clase['Aula'] = datos_sin_limpiar[i][j-1];
            clase['Horario'] = datos_sin_limpiar[i][j];
            aux[key] = clase;
            esUnDia = true;
          }
        });
        if (!esUnDia)
          if (datos_sin_limpiar[0][j]=='Día'){
            let examen = {
              Día:"",
              Hora:"",
            //  Aula:"",
            }

            examen['Día' ]=datos_sin_limpiar[i][j];
            examen['Hora']= datos_sin_limpiar[i][j+1];
           // examen['Aula']= datos_sin_limpiar[i][j+2]+"";
           //j=j+2;
           j=j+1;

            if(cont == 0)
              key = '1p' ;
            else if(cont == 1)
              key = '2p' ;
            else if(cont == 2)
              key = '1f' ;
            else if(cont == 3)
              key = '2f' ;
            aux[key] = examen;
            cont++;
          } 
          else if (!esUnDia && datos_sin_limpiar[0][j]!= "AULA"){
            aux[key] = datos_sin_limpiar[i][j];
          }
      }
      datosLimpios.push(aux);
      
    }
    datosLimpios.shift();
    // console.log(datosLimpios);
    
    return datosLimpios;
  }


  //console.log(JSON.stringify(this.data.dataFromExcel));
  
  // let r = selectCustomClass(
  //   this.dataFromExcel,
  //   this.seletedClassName,
  //   careerEnf
  // );
  // this.selectedClass = r.all
  // this.selectedClassForView = r.forView
  // console.log('selectedClass', this.selectedClass);

}
