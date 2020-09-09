import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitscrollPageRoutingModule } from './infinitscroll-routing.module';

import { InfinitscrollPage } from './infinitscroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitscrollPageRoutingModule
  ],
  declarations: [InfinitscrollPage]
})
export class InfinitscrollPageModule {}
