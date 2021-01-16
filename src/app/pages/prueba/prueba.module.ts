import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaPageRoutingModule } from './prueba-routing.module';

import { PruebaPage } from './prueba.page';
import { PruebaComponent } from './prueba.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [
    PruebaPage,
    PruebaComponent
  ],
  exports: [PruebaComponent]
})
export class PruebaPageModule {}
