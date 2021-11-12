import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttractDetailPage } from './attract-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AttractDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttractDetailPageRoutingModule {}
