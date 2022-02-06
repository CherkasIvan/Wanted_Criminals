import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../app-material.module';

import { CriminalCardComponent } from './criminal-card.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, AppMaterialModule, TranslateModule],
  declarations: [CriminalCardComponent],
  exports: [CriminalCardComponent],
})
export class CriminalCardModule {}
