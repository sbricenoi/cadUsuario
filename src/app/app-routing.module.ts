import { RegistroPage } from './registro/registro.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//   },
//   {
//     path: 'home-cad',
//     loadChildren: () => import('./home-cad/home-cad.module').then( m => m.HomeCadPageModule)
//   },
//   {
//     path: 'agenda',
//     loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
//   },
//   {
//     path: 'historial',
//     loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
//   },
//   {
//     path: 'registro',
//     loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
//   },
//   {
//     path: 'perfil',
//     loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
//   },
//   {
//     path: 'tabs',
//     loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
//   },
//   {
//     path: 'alerta',
//     loadChildren: () => import('./alerta/alerta.module').then( m => m.AlertaPageModule)
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'registro',
    component: RegistroPage
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
