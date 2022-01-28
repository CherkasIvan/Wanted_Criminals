import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModalComponent } from './login-modal.component';

import { AppMaterialModule } from '../../app-material.module';

@NgModule({
  imports: [CommonModule, AppMaterialModule],
  declarations: [LoginModalComponent],
  exports: [LoginModalComponent],
})
export class LoginModalModule {}
