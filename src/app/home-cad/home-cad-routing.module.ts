import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCadPage } from './home-cad.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCadPageRoutingModule {}
