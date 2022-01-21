import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPageRoutingModule } from './content-page-routing.module';
import { ContentPageComponent } from './content-page.component';


@NgModule({
  declarations: [
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    ContentPageRoutingModule
  ]
})
export class ContentPageModule { }
