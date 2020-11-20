import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: "app-inicio-page",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  
}

