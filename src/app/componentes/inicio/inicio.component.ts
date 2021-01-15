import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';
import { DataService } from '../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  @Input() data: DataService;

  semana = [
    {nombre:"Lunes", clases:[],},
    {nombre:"Martes", clases:[],},
    {nombre:"Miércoles", clases:[],},
    {nombre:"Jueves", clases:[],},
    {nombre:"Viernes", clases:[],},
    {nombre:"Sábado", clases:[],},
  ];
  constructor(
    public modalController: ModalController, 
  ) {}

  ngOnInit() {
    this.init();

  }
  
  ionViewWillEnter(){
    this.init();
  }

  /**
   * Inicio
   */

  init() {

    console.log('hoola');
    

    // Get data from 
    let data = window.localStorage.getItem('toInicio')
    if (data) {
      //formatearDatos(); 
      console.log(JSON.parse(data));
      let a = JSON.parse(data)

      a.forEach(element => {
        this.semana.forEach(dia => {
          console.log('elementos',element);
          let clase = element[dia.nombre];

          if (clase!=undefined && clase['Horario'] != undefined )
            dia.clases.push({
              horario: clase['Horario'].replace("-", "a"),
              nombre: element.Asignatura,
            });
        })
      });
      window.localStorage.clear()
      window.localStorage['toCalendar'] = data
      window.localStorage['semana'] = JSON.stringify(this.semana)
      console.log(this.semana);

    } else {
      console.log('hola2')
      let semana = window.localStorage.getItem("semana");
      console.log(JSON.parse(semana));
      
      if (semana) {
        this.semana = JSON.parse(semana);
      }
    }
  }

  /**
   * Html Controllers
   */
  segmentChanged(ev: any, slides: any) {
    slides.slideTo(ev.detail.value);
  }

  async ionSlideDidChange(ev: any, segment: any, slides: any) {
    let index = await slides.getActiveIndex();
    segment.value = index;
    let active = segment.el.childNodes[index];
    active.scrollIntoView({ behavior: "smooth", inline: "center" });
  }

  @ViewChild(IonContent, { static: false }) content: IonContent;
  async onSlideChanged(): Promise<void> {
    //console.log(this.content);
    
    //this.content.scrollToTop;
  }

}
