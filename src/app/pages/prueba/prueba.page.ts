import { Component, ViewChild } from '@angular/core';
import { MenuController} from '@ionic/angular';
import * as XLSX from "xlsx";
import { File as File1 } from '@ionic-native/file/ngx';
import { DataService } from 'src/app/servicios/data.service';


@Component({
  selector: "prueba.page.scss",
  templateUrl: "prueba.page.html",
})
export class PruebaPage {
  page =5;
  x = "hola"
  constructor(private file: File1,
              public data: DataService) {}

  ngOnInit(){
    let datos = window.localStorage.data
    if(datos){
      this.data.remplazarDatos(JSON.parse(datos))
      this.data.seccionActual = 3
    }else{
    }
    // console.log(this.data)
  }
  ionViewWillEnter(){
    this.ngOnInit()
  }

  read(bstr: string) {
    /* read workbook */
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });

    /* grab first sheet */
    const wsname: string = 'IIN';
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    /* save data */
    this.data = <any>XLSX.utils.sheet_to_json(ws, { header: 1, range:11 });
    // console.log(this.data);
    
  }

  /* File Input element for browser */
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    // console.log('target',target);
    
    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      this.read(bstr);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  // /* Import button for mobile */
  // async import() {
  //   try {
  //     const target: string =
  //       this.file.documentsDirectory ||
  //       this.file.externalDataDirectory ||
  //       this.file.dataDirectory ||
  //       "";
  //     const dentry = await this.file.resolveDirectoryUrl(target);
  //     const url: string = dentry.nativeURL || "";
  //     alert(`Attempting to read SheetJSIonic.xlsx from ${url}`);
  //     const bstr: string = await this.file.readAsBinaryString(
  //       url,
  //       "SheetJSIonic.xlsx"
  //     );
  //     this.read(bstr);
      // console.log(this.data);
      
  //   } catch (e) {
  //     const m: string = e.message;
  //     alert(
  //       m.match(/It was determined/) ? "Use File Input control" : `Error: ${m}`
  //     );
  //   }
  // }

}