import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardMakingRoutingModule } from './card-making-routing.module';
import { CardMakingComponent } from './card-making.component';

@NgModule({
  imports: [
    CommonModule,
    CardMakingRoutingModule
  ],
  declarations: [CardMakingComponent]
})
export class CardMakingModule { }
