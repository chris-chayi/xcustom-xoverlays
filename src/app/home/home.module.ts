import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MyModalPageModule } from '../my-modal/my-modal.module';
import { MyPopoverPageModule } from '../my-popover/my-popover.module';
import { StandardModalPageModule } from '../standard-modal/standard-modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MyModalPageModule,
    MyPopoverPageModule,
    StandardModalPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
