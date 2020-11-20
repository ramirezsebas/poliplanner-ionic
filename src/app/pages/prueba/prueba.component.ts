import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss'],
})
export class PruebaComponent implements OnInit {
  mostrar=false
  a="hola que tal"
  @Input()
  customTemplate: TemplateRef<any>;
  @Input()
  page:number
  constructor() { }

  ngOnInit() {}

}
