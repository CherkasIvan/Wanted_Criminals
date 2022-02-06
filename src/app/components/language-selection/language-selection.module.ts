import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AppMaterialModule } from '../../app-material.module';
import { LanguageSelectionComponent } from './language-selection.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule, TranslateModule],
  declarations: [LanguageSelectionComponent],
  exports: [LanguageSelectionComponent],
})
export class LanguageSelectionModule {}
