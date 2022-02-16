import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProfileSelectionComponent } from './profile-selection.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [ProfileSelectionComponent],
  exports: [ProfileSelectionComponent],
})
export class ProfileSelectionModule {}
