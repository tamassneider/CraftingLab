import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtyFactsComponent} from './arty-facts.component';

const routes: Routes = [
  {path: '', component: ArtyFactsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtyFactsRoutingModule { }
