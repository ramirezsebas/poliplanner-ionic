import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { DataService } from '../../../servicios/armar-horario/data.service';
import * as XLSX from "xlsx";


@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent implements OnInit {
  FileName: string;
  dataFromExcel: any[];

  constructor(
    private alertController: AlertController,
    private data: DataService,
  ) {
    this.readFilePopup();
  }

  ngOnInit() {}


  async readFilePopup() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Seleccionar Horario",
      message: "<p>Actualizado de la Facultad!</p>",
      buttons: [
        {
          text: "Cancelar",
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
    const read = (bstr: string) => {
      /* read workbook */
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });

      /* grab sheets names */
      const codigosDeCarreras = this.data.seleccionados.flatMap(x=>x.code)

      /* save data */
      let data = [];
      for (const codigo of codigosDeCarreras) {
        const ws: XLSX.WorkSheet = wb.Sheets[codigo];
        data.push(
          <any>XLSX.utils.sheet_to_json(ws, { header: 1, range: 11 })
        );
      }
      return data;
    }


    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      this.data.dataFromExcel = read(bstr);
      console.log(JSON.stringify(this.data.dataFromExcel));
      
      // let r = selectCustomClass(
      //   this.dataFromExcel,
      //   this.seletedClassName,
      //   careerEnf
      // );
      // this.selectedClass = r.all
      // this.selectedClassForView = r.forView
      // console.log('selectedClass', this.selectedClass);
    };
    this.FileName = target.files[0].name;
    reader.readAsBinaryString(target.files[0]);
  }

}
