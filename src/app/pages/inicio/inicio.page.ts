import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: "page-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  semana = [
    {nombre:"Lunes", clases:[],},
    {nombre:"Martes", clases:[],},
    {nombre:"Mi­ércoles", clases:[],},
    {nombre:"Jueves", clases:[],},
    {nombre:"Viernes", clases:[],},
    {nombre:"Sábado", clases:[],},
  ];
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  

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

