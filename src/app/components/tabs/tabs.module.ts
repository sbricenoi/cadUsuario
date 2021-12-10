
import { Routes } from '@angular/router'
import { TabsComponent } from './tabs.component';

const routes:Routes = [
  {
    path: 'tabs',
    component: TabsComponent,

  },
  {
    path: 'agenda',
    loadChildren: () => import('../../agenda/agenda.module').then( m => m.AgendaPageModule)
  }
]



