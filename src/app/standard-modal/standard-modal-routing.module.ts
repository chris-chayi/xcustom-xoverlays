import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandardModalPage } from './standard-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StandardModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandardModalPageRoutingModule {}
