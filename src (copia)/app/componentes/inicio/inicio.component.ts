import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  @Input() principal = true;
  semana: { nombre: string; clases: any[]; }[];
  
  constructor(
    public modalController: ModalController,
    public data: DataService,
  ) {
    this.semana = this.data.getSemana();
   }

  ngOnInit() { }

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
