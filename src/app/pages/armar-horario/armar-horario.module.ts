import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmarHorarioPageRoutingModule } from './armar-horario-routing.module';

import { ArmarHorarioPage } from './armar-horario.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ArmarHorarioModule } from '../../componentes/armar-horario/armar-horario.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmarHorarioPageRoutingModule,
    ComponentesModule,
    ArmarHorarioModule,
  ],
  declarations: [ArmarHorarioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArmarHorarioPageModule {}
