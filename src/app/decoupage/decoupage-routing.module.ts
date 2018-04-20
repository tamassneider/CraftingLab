import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DecoupageComponent} from './decoupage.component';

const routes: Routes = [
  {path: '', component: DecoupageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoupageRoutingModule { }
