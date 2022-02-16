import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AppMaterialModule } from '../../app-material.module';

import { CriminalCardComponent } from './criminal-card.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule, TranslateModule],
  declarations: [CriminalCardComponent],
  exports: [CriminalCardComponent],
})
export class CriminalCardModule {}
