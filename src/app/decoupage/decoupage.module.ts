import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoupageRoutingModule } from './decoupage-routing.module';
import { DecoupageComponent } from './decoupage.component';

@NgModule({
  imports: [
    CommonModule,
    DecoupageRoutingModule
  ],
  declarations: [DecoupageComponent]
})
export class DecoupageModule { }
