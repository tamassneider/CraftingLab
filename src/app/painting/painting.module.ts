import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintingRoutingModule } from './painting-routing.module';
import { PaintingComponent } from './painting.component';

@NgModule({
  imports: [
    CommonModule,
    PaintingRoutingModule
  ],
  declarations: [PaintingComponent]
})
export class PaintingModule { }
