import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmarHorarioPage } from './armar-horario.page';

const routes: Routes = [
  {
    path: '',
    component: ArmarHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmarHorarioPageRoutingModule {}
