import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ExpandibleComponent } from './expandible/expandible.component';
import { ModalComponent } from './calendario/modal/modal.component';
import { Page1Component } from './armar-horario/page1/page1.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ExpandibleComponent,
    ModalComponent,
    Page1Component,
    CalendarioComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ExpandibleComponent,
    ModalComponent,
    Page1Component,
    CalendarioComponent,
    InicioComponent,
  ]
})
export class ComponentesModule { }
