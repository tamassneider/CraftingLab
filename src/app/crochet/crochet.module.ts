import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrochetRoutingModule } from './crochet-routing.module';
import { CrochetComponent } from './crochet.component';

@NgModule({
  imports: [
    CommonModule,
    CrochetRoutingModule
  ],
  declarations: [CrochetComponent]
})
export class CrochetModule { }
