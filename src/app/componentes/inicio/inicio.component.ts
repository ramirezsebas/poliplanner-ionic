import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit{
  @Input() semana;
  @Input() toCalendar;
  slideOpts = {
    initialSlide: new Date().getDay()-1,
    pagination: true,
  };
  @ViewChild('segment', {static: true}) segment: IonSegment;


  constructor(
    public modalController: ModalController, 
  ) {
  }
  

  ngOnInit() {
    
    this.init();

    this.segment.value=(new Date().getDay()-1).toString()
  }

  ionViewWillEnter(){this.init()}
  /**
   * Inicio
   */

  init() {

    // console.log('hoola');
    
    const inicializarSemana = ()=>
      [
        {nombre:"Lunes", clases:[],},
        {nombre:"Martes", clases:[],},
        {nombre:"Miércoles", clases:[],},
        {nombre:"Jueves", clases:[],},
        {nombre:"Viernes", clases:[],},
        {nombre:"Sábado", clases:[],},
      ];
    

    // Get data from 
    let data = this.toCalendar
    this.semana = inicializarSemana();
    
    
    if (data) {
      //formatearDatos(); 
      const horLab = /[\d]*[\:][\d]* - [\d]*[\:][\d]*.?\(L\)/g
      let horNormal = /([\d]*[\:][\d]* - [\d]*[\:][\d]*)+/g

      this.semana.forEach(dia => {
        data.forEach(element => {
          let clase = element[dia.nombre];
          if (clase && clase['Horario'] && clase['Horario'].match(horNormal) && clase['Horario'].match(horNormal).lenght!=0 ){
            let horarioLab = clase['Horario'].match(horLab)
            clase['Horario'] = clase['Horario'].replace(horLab,'')
            let horarios = clase['Horario'].match(horNormal)

            if(horarioLab)
              dia.clases.push({
                horario: horarioLab[0].match(horNormal)[0].replace("-", "a"),
                nombre: element.Asignatura,
                lab: true,
              });
            if(horarios)
              dia.clases.push({
                horario: horarios[0].replace("-", "a"),
                nombre: element.Asignatura,
              });

            
          }
        })
      });

      // Ordeno por hora
      // this.semana.forEach(dia=> dia.clases.sort((a,b)=>a.horario>b.horario))
      this.semana.forEach(dia=> dia.clases.sort((a,b)=>a.horario>b.horario?1:-1))

    } else {
      // console.log('hola2: toCalendar no tiene nada')
      //let semana = window.localStorage.getItem("semana");
      // console.log(JSON.parse(semana));
      //
      //if (semana) {
      //  this.data.semana = JSON.parse(semana);
      //}
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
    // console.log(this.content);
    
    this.content.scrollToTop;
  }

}
