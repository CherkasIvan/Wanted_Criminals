import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSelectionComponent } from './profile-selection.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [ProfileSelectionComponent],
  exports: [ProfileSelectionComponent],
})
export class ProfileSelectionModule {}
