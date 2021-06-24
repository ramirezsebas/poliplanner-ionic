import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreflightPage } from './preflight.page';

const routes: Routes = [
  {
    path: '',
    component: PreflightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreflightPageRoutingModule {}
