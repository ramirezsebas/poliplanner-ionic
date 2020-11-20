import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ExpandibleComponent } from './expandible/expandible.component';
import { ModalComponent } from './calendario/modal/modal.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { InicioComponent } from './inicio/inicio.component';
import { FabComponent } from './fab/fab.component';
import { CalendarModule } from './ion2-calendar/calendar.module';
import { SelCarreraComponent } from './sel-carrera/sel-carrera.component';
import { SelMatAprobComponent } from './sel-mat-aprob/sel-mat-aprob.component';
import { FooterComponent } from './footer/footer.component';
import { MatPorCarreraComponent } from './mat-por-carrera/mat-por-carrera.component';
import { FormsModule } from '@angular/forms';
import { SelMatComponent } from './sel-mat/sel-mat.component';
import { SelSeccionesComponent } from './sel-secciones/sel-secciones.component';
import { FilePickerComponent } from './file-picker/file-picker.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ExpandibleComponent,
    ModalComponent,
    CalendarioComponent,
    InicioComponent,
    FabComponent,
    SelCarreraComponent,
    SelMatComponent,
    SelMatAprobComponent,
    FooterComponent,
    MatPorCarreraComponent,
    SelSeccionesComponent,
    FilePickerComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    CalendarModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ExpandibleComponent,
    ModalComponent,
    CalendarioComponent,
    InicioComponent,
    FabComponent,
    SelCarreraComponent,
    SelMatComponent,
    SelMatAprobComponent,
    FooterComponent,
    MatPorCarreraComponent,
    SelSeccionesComponent,
    FilePickerComponent,
    InicioComponent,
  ]
})
export class ComponentesModule { }
