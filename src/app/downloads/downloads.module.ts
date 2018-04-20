import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadsRoutingModule } from './downloads-routing.module';
import { DownloadsComponent } from './downloads.component';

@NgModule({
  imports: [
    CommonModule,
    DownloadsRoutingModule
  ],
  declarations: [DownloadsComponent]
})
export class DownloadsModule { }
