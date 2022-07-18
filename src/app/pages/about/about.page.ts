import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnInstagram(){
    window.open('https://www.instagram.com/ferrios__/')
  }

  btnWhatsapp(){
    window.open('https://wa.me/595984516464?text=Hola');
  }

  btnEmail(){
    window.open('mailto:luis.fer334@fpuna.edu.py');
  }
  btnLlamar(){
    window.open("tel:+595981918200")
  }
}
