import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueceuPageRoutingModule } from './esqueceu-routing.module';

import { EsqueceuPage } from './esqueceu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueceuPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EsqueceuPage]
})
export class EsqueceuPageModule {}
