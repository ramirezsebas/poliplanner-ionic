import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full",
  },
  {
    path: "inicio",
    loadChildren: () =>
      import("./pages/inicio/inicio.module").then((m) => m.InicioPageModule),
  },
  {
    path: "secciones",
    loadChildren: () =>
      import("./pages/secciones/secciones.module").then(
        (m) => m.SeccionesPageModule
      ),
  },
  {
    path: "calendario",
    loadChildren: () =>
      import("./pages/calendario/calendario.module").then(
        (m) => m.CalendarioPageModule
      ),
  },
  {
    path: "prueba",
    loadChildren: () =>
      import("./pages/prueba/prueba.module").then((m) => m.PruebaPageModule),
  },
  {
    path: 'cargar-horario',
    loadChildren: () => import('./pages/cargar-horario/cargar-horario.module').then( m => m.CargarHorarioPageModule)
  },
  {
    path: 'armar-horario',
    loadChildren: () => import('./pages/armar-horario/armar-horario.module').then( m => m.ArmarHorarioPageModule)
  },
  {
    path: 'preflight',
    loadChildren: () => import('./pages/preflight/preflight.module').then( m => m.PreflightPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
