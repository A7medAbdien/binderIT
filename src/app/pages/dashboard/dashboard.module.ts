import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardPage } from './dashboard.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DashboardPageRoutingModule
  ],
  declarations: [HeaderComponent, DashboardPage]
})
export class DashboardPageModule { }
