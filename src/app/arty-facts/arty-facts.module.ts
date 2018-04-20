import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtyFactsRoutingModule } from './arty-facts-routing.module';
import { ArtyFactsComponent } from './arty-facts.component';

@NgModule({
  imports: [
    CommonModule,
    ArtyFactsRoutingModule
  ],
  declarations: [ArtyFactsComponent]
})
export class ArtyFactsModule { }
