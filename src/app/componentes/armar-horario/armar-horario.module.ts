import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeleccionarCarreraComponent } from './seleccionar-carrera/seleccionar-carrera.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SeleccionarMateriaComponent } from './seleccionar-materia/seleccionar-materia.component';
import { PorCarreraComponent } from './seleccionar-materia/por-carrera/por-carrera.component';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { SeleccionarSeccionesComponent } from './seleccionar-secciones/seleccionar-secciones.component';
import { SeleccionarMateriasAprobadasComponent } from './seleccionar-materias-aprobadas/seleccionar-materias-aprobadas.component';



@NgModule({
  declarations: [
    SeleccionarCarreraComponent,
    FooterComponent,
    SeleccionarMateriaComponent,
    PorCarreraComponent,
    FilePickerComponent,
    SeleccionarSeccionesComponent,
    SeleccionarMateriasAprobadasComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    SeleccionarCarreraComponent,
    FooterComponent,
    SeleccionarMateriaComponent,
    PorCarreraComponent,
    FilePickerComponent,
    SeleccionarSeccionesComponent,
    SeleccionarMateriasAprobadasComponent,
  ]
})
export class ArmarHorarioModule { }
