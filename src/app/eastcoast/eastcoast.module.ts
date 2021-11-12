import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EastcoastPageRoutingModule } from './eastcoast-routing.module';

import { EastcoastPage } from './eastcoast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EastcoastPageRoutingModule
  ],
  declarations: [EastcoastPage]
})
export class EastcoastPageModule {}
