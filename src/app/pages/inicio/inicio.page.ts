import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  semana = [
    {nombre:"LUNES", clases:[],},
    {nombre:"MARTES", clases:[],},
    {nombre:"MIERCOLES", clases:[],},
    {nombre:"JUEVES", clases:[],},
    {nombre:"VIERNES", clases:[],},
    {nombre:"SABADO", clases:[],},
  ];
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  /**
   * Inicio
   */

  ionViewWillEnter() {
    // Get data from 
    let data = window.localStorage.getItem('toInicio')
    if (data){ 
      console.log(JSON.parse(data));
      let a = JSON.parse(data)

      a.forEach(element => {
        this.semana.forEach(dia=>{
          console.log(element);
          console.log(dia.nombre);
          let nombreIndex = dia.nombre.toLowerCase()
          
          if (element[nombreIndex].horario)
            dia.clases.push({
              horario: element[nombreIndex].horario.replace("-", "a"),
              nombre: element.asignatura,
            });
          else if(nombreIndex==='sabado' && element[nombreIndex].noche)
            dia.clases.push({
              horario: element[nombreIndex].noche,
              nombre: element.asignatura,
            });
        })
      });
      window.localStorage.clear()
      window.localStorage['toCalendar'] = data
      window.localStorage['semana']=JSON.stringify(this.semana)
      console.log(this.semana);
      
    }else{
      let semana = window.localStorage.getItem("semana");
      if(semana){
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
    this.content.scrollToTop();
  }
}

