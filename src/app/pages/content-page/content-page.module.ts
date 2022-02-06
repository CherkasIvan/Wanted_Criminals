import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { ContentPageRoutingModule } from './content-page-routing.module';
import { SidenavModule } from 'src/app/components/sidenav/sidenav.module';
import { ContentPageComponent } from './content-page.component';
import { CriminalCardModule } from 'src/app/components/criminal-card/criminal-card.module';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CriminalsTableModule } from 'src/app/components/criminals-table/criminals-table.module';

@NgModule({
  declarations: [ContentPageComponent],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    SwiperModule,
    CommonModule,
    ContentPageRoutingModule,
    SidenavModule,
    CriminalCardModule,
    CriminalsTableModule,
  ],
})
export class ContentPageModule {}
