import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonSlides, ModalController, NavController, Platform } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: "page-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
 
  constructor(
    public modalController: ModalController, 
    public data: DataService,
    private formData: FormService,
    private navCtrl:NavController,
    private platform: Platform,
  ) {}

  ngOnInit() { 
    // this.preflight()
    
  }

  preflight() {
    const isMobile =()=> { return this.platform.is('mobile'); }
    const isPWA =()=> { return this.platform.is ('pwa'); }
    const isTablet =()=> { return this.platform.is ('tablet'); } 
    if (!isMobile() || isPWA() || isTablet()) {
      let nroVisitas = window.localStorage.visitas;
      if(nroVisitas=="undefined" || nroVisitas==10){
        window.localStorage.visitas=0;
        this.navCtrl.navigateForward('preflight')
      }
      else
        window.localStorage.visitas++;
    }
  }
  
  ionViewDidEnter(){
    
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

