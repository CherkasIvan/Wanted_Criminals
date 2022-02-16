import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { ContentPageRoutingModule } from './content-page-routing.module';
import { CriminalsTableModule } from '../../components/criminals-table/criminals-table.module';
import { SidenavModule } from '../../components/sidenav/sidenav.module';

import { ContentPageComponent } from './content-page.component';

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
