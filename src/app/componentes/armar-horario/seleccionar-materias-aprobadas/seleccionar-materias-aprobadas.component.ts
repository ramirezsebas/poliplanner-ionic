import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-seleccionar-materias-aprobadas',
  templateUrl: './seleccionar-materias-aprobadas.component.html',
  styleUrls: ['./seleccionar-materias-aprobadas.component.scss'],
})
export class SeleccionarMateriasAprobadasComponent implements OnInit {

  constructor(public formData: FormService) {}

  ngOnInit() {
    this.formData.esAprobar=true;
    // console.log(this.formData.esAprobar);
  }

  onChange(selected, id) {
    this.formData.materiasAprobadas[id] = selected;
  }

}
