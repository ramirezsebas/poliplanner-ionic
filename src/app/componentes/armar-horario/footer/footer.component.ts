import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from '../../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Input() ultimo: number = 3;
  @Input() data: DataService;

  constructor() { console.log(this.data);
  }

  next(){
    console.log(this.data);
    
    this.data.seccionActual++;
  }
  
  previous(){
    this.data.seccionActual--;
  }

  validarSeccion(x: number) {
    return this.data.seccionActual == x + 4;
  }
  
  ngOnInit() {}

}
