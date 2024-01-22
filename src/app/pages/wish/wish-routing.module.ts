import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishPage } from './wish.page';

const routes: Routes = [
  {
    path: '',
    component: WishPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishPageRoutingModule { }
