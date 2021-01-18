import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioPageRoutingModule } from './calendario-routing.module';

import { CalendarioPage } from './calendario.page';
import { ComponentesModule } from '../../componentes/componentes.module';
import { CalendarModule } from '../../componentes/calendario/ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioPageRoutingModule,
    CalendarModule,
    ComponentesModule  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CalendarioPage],
})
export class CalendarioPageModule {}
;