import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss'],
})
export class SeccionesComponent implements OnInit {

  @Input() toCalendar;

  constructor() { }

  ngOnInit() {
    
  }

}
