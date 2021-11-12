import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoiDetailCountryPageRoutingModule } from './poi-detail-country-routing.module';

import { PoiDetailCountryPage } from './poi-detail-country.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoiDetailCountryPageRoutingModule
  ],
  declarations: [PoiDetailCountryPage]
})
export class PoiDetailCountryPageModule {}
