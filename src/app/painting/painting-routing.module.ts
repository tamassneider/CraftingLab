import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaintingComponent} from './painting.component';

const routes: Routes = [
  {path: '', component: PaintingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintingRoutingModule { }
