import { Component, Input, OnInit } from '@angular/core';
import Schedule from 'src/app/models/Schedule';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss'],
})
export class SeccionesComponent implements OnInit {

  @Input() toCalendar: Schedule[];
  secciones: Schedule[];

  constructor() { 
    this.secciones = this.toCalendar
    console.log(this.secciones);
    
    
  }
  
  ngOnInit() {
    console.log(this.secciones);
  }

    
}
