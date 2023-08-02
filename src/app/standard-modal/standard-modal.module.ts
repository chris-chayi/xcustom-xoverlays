import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandardModalPageRoutingModule } from './standard-modal-routing.module';

import { StandardModalPage } from './standard-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandardModalPageRoutingModule
  ],
  declarations: [StandardModalPage]
})
export class StandardModalPageModule {}
