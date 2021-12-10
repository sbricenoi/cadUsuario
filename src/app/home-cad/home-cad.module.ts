import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCadPageRoutingModule } from './home-cad-routing.module';

import { HomeCadPage } from './home-cad.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomeCadPage]
})
export class HomeCadPageModule {}
