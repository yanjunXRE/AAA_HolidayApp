import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PortalPageRoutingModule } from './portal-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { PortalPage } from './portal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule, NgxQRCodeModule,
    PortalPageRoutingModule
  ],
  declarations: [PortalPage]
})
export class PortalPageModule {}
