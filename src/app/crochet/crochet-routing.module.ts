import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrochetComponent} from './crochet.component';

const routes: Routes = [
  {path: '', component: CrochetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrochetRoutingModule { }
