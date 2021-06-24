import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreflightPageRoutingModule } from './preflight-routing.module';

import { PreflightPage } from './preflight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreflightPageRoutingModule
  ],
  declarations: [PreflightPage]
})
export class PreflightPageModule {}
