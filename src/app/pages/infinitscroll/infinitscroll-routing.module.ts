import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitscrollPage } from './infinitscroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitscrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitscrollPageRoutingModule {}
