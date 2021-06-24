import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonSlides, ModalController, NavController, Platform } from '@ionic/angular';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: "page-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
 
  constructor(
    public modalController: ModalController, 
    public data: DataService,
    private navCtrl:NavController,
    private platform: Platform,
  ) {}

  ngOnInit() {
    this.init()
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

  init(){
    let datos = window.localStorage.data
    if(datos){
      this.data.remplazarDatos(JSON.parse(datos))
      // console.log(this.data.toCalendar);
    }else{
      this.data = new DataService();
      // if( this.data.toCalendar.length == 0 )
      //   this.navCtrl.navigateForward('armar-horario')
    }
    // console.log(this.data)

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

