import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BishanPage } from './bishan.page';

const routes: Routes = [
  {
    path: '',
    component: BishanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BishanPageRoutingModule {}
