import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'cad',
    component: TabsPage,
    children:[
      { 
        path: 'agenda',
        children:[
          {
            path:'',
            loadChildren: () => 
              import('../agenda/agenda.module').then(m => m.AgendaPageModule)
          }
        ]
     },
     { 
      path: 'home-cad',
      children:[
        {
          path:'',
          loadChildren: () => 
            import('../home-cad/home-cad.module').then(m => m.HomeCadPageModule)
        }
      ]
   },
     { 
      path: 'historial',
      children:[
        {
          path:'',
          loadChildren: () => 
            import('../historial/historial.module').then(m => m.HistorialPageModule)
        }
      ]
   },
   { 
    path: 'alerta',
    children:[
      {
        path:'',
        loadChildren: () => 
          import('../alerta/alerta.module').then(m => m.AlertaPageModule)
      }
    ]
 }   
    ]
  },
   {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
   path: 'login',
   loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
  },
  {
    path:'registro',
    loadChildren: () => import('../registro/registro.module').then(m => m.RegistroPageModule) 
  },
  {
    path: 'calendario',
    loadChildren: () => import('../calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
