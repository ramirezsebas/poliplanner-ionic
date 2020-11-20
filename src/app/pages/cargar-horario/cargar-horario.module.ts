import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargarHorarioPageRoutingModule } from './cargar-horario-routing.module';

import { CargarHorarioPage } from './cargar-horario.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargarHorarioPageRoutingModule,
    ComponentesModule
  ],
  declarations: [CargarHorarioPage]
})
export class CargarHorarioPageModule {}
