import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSelectionModule } from './profile-selection/profile-selection.module';
import { LanguageSelectionModule } from '../language-selection/language-selection.module';
import { LoginModalModule } from '../login-modal/login-modal.module';
import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ProfileSelectionModule,
    LoginModalModule,
    TranslateModule,
    LanguageSelectionModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
