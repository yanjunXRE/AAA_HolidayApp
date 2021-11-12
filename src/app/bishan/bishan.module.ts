import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BishanPageRoutingModule } from './bishan-routing.module';

import { BishanPage } from './bishan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BishanPageRoutingModule
  ],
  declarations: [BishanPage]
})
export class BishanPageModule {}
