import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-armar-horario',
  templateUrl: './armar-horario.page.html',
  styleUrls: ['./armar-horario.page.scss'],
})
export class ArmarHorarioPage implements OnInit {

  constructor(private data: DataService) { 
    
  }

  ngOnInit() {
  }

  nroElemento(){
    return this.data.elementoAmostrar();
  }
}
