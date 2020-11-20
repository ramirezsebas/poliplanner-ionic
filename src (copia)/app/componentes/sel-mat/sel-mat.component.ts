import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sel-mat',
  templateUrl: './sel-mat.component.html',
  styleUrls: ['./sel-mat.component.scss'],
})
export class SelMatComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {}

  onChange(selected, id) {
    this.data.materiasSeleccionadas[id] = selected;
  }

}
