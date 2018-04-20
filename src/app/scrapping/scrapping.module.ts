import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrappingRoutingModule } from './scrapping-routing.module';
import { ScrappingComponent } from './scrapping.component';

@NgModule({
  imports: [
    CommonModule,
    ScrappingRoutingModule
  ],
  declarations: [ScrappingComponent]
})
export class ScrappingModule { }
