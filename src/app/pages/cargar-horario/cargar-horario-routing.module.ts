import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargarHorarioPage } from './cargar-horario.page';

const routes: Routes = [
  {
    path: '',
    component: CargarHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargarHorarioPageRoutingModule {}
