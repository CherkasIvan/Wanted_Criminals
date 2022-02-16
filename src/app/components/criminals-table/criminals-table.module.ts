import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AppMaterialModule } from '../../app-material.module';

import { CriminalsTableComponent } from './criminals-table.component';

import { UnknownPropertyPipe } from '../../pipes/unknown-property.pipe';

@NgModule({
  imports: [CommonModule, AppMaterialModule, TranslateModule],
  declarations: [CriminalsTableComponent, UnknownPropertyPipe],
  exports: [CriminalsTableComponent],
})
export class CriminalsTableModule {}
