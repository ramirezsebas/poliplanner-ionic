import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  paso: number;

  constructor(private data: DataService) { 
    this.paso = this.data.seccionActual;
  }

  ngOnInit() {}


  next() {
    this.data.next();
    this.paso++;
  }

  previous() {
    this.data.previous();
    this.paso--;
  }

  validarSeccion(x: number) {
    return this.data.seccionActual == x + this.data.offset;
  }

}
