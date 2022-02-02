import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSelectionModule } from './profile-selection/profile-selection.module';
import { LoginModalModule } from '../login-modal/login-modal.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileSelectionModule,
    LoginModalModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
