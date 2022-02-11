import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPageRoutingModule } from './content-page-routing.module';
import { SidenavModule } from 'src/app/components/sidenav/sidenav.module';
import { ContentPageComponent } from './content-page.component';
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
    CommonModule,
    ContentPageRoutingModule,
    SidenavModule,
    CriminalsTableModule,
  ],
})
export class ContentPageModule {}
