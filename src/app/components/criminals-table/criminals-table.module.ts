import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../app-material.module';

import { TranslateModule } from '@ngx-translate/core';
import { CriminalsTableComponent } from './criminals-table.component';
import { MatSortModule } from '@angular/material/sort';
import { UnknownPropertyPipe } from '../../pipes/unknown-property.pipe';

@NgModule({
  imports: [CommonModule, AppMaterialModule, TranslateModule, MatSortModule],
  declarations: [CriminalsTableComponent, UnknownPropertyPipe],
  exports: [CriminalsTableComponent],
})
export class CriminalsTableModule {}
