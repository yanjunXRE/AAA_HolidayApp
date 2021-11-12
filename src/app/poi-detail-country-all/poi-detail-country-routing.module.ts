import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoiDetailCountryPage } from './poi-detail-country.page';

const routes: Routes = [
  {
    path: '',
    component: PoiDetailCountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoiDetailCountryPageRoutingModule {}
