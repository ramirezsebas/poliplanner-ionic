import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmarHorarioPageRoutingModule } from './armar-horario-routing.module';

import { ArmarHorarioPage } from './armar-horario.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmarHorarioPageRoutingModule,
    ComponentesModule,
  ],
  declarations: [ArmarHorarioPage]
})
export class ArmarHorarioPageModule {}
