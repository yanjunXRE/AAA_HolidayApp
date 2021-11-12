import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttractDetailPageRoutingModule } from './attract-detail-routing.module';
import { CalendarModule } from 'ion2-calendar';
import { AttractDetailPage } from './attract-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttractDetailPageRoutingModule,  CalendarModule
  ],
  declarations: [AttractDetailPage]
})
export class AttractDetailPageModule {}
