import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import { ProfileSelectionModule } from './profile-selection/profile-selection.module';

@NgModule({
  imports: [CommonModule, ProfileSelectionModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
