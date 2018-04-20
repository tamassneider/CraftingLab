import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardMakingComponent} from './card-making.component';

const routes: Routes = [
  {path: '', component: CardMakingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardMakingRoutingModule { }
