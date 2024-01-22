import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardPage } from './dashboard.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DashboardCardComponent } from 'src/app/components/UI/dashboard-card/dashboard-card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DashboardPageRoutingModule
  ],
  declarations: [HeaderComponent, DashboardPage, DashboardCardComponent]
})
export class DashboardPageModule { }
