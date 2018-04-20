import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScrappingComponent} from './scrapping.component';

const routes: Routes = [
  {path: '', component: ScrappingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrappingRoutingModule { }
