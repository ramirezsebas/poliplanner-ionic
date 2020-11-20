import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  // Data passed in by componentProps
  @Input() eventosPorMostrar;
  @Input() fechaActual: string;

  constructor() {
    console.log("Hola",this.eventosPorMostrar, this.fechaActual);
    
   }

  onClick(){
    console.log(this.eventosPorMostrar);
    
  }
  ngOnInit() {}

}
