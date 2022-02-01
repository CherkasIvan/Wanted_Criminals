import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSelectionComponent } from './profile-selection.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileSelectionComponent],
  exports: [ProfileSelectionComponent],
})
export class ProfileSelectionModule {}
