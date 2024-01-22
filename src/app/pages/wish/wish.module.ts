import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishPage } from './wish.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { WishPageRoutingModule } from './wish-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    WishPageRoutingModule
  ],
  declarations: [WishPage]
})
export class WishPageModule { }
