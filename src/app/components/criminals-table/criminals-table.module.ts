import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../app-material.module';

import { TranslateModule } from '@ngx-translate/core';
import { CriminalsTableComponent } from './criminals-table.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule, TranslateModule],
  declarations: [CriminalsTableComponent],
  exports: [CriminalsTableComponent],
})
export class CriminalsTableModule {}
