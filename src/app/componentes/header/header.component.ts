import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  direccionActual: string;
  constructor(private router: Router,
    private navCtrl:NavController,
    ) {
    this.setTitle();
  }
  
  setTitle(){
    let dir = this.router.url;
    dir = dir.split('/')[1].split('?')[0];
    if (dir === 'inicio')
      dir = 'Poliplanner';
    dir = capitalizeFirstLetter(dir);
    dir = dir.replace('-', ' ')
    this.direccionActual = dir;

    function capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  darkMode: boolean = true;

  cambio() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const r = document.body.classList.toggle( 'dark');
    window.localStorage.dark = r;
    
  }

  inicio(){
    window.location.replace('inicio')
    
    
  }

  ngOnInit() {}
}
