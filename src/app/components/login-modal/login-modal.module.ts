import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AppMaterialModule } from '../../app-material.module';

import { LoginModalComponent } from './login-modal.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule, TranslateModule],
  declarations: [LoginModalComponent],
  exports: [LoginModalComponent],
})
export class LoginModalModule {}
