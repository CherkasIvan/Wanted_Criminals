import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModalComponent } from './login-modal.component';


@NgModule({
  imports: [CommonModule],
  declarations: [LoginModalComponent],
  exports: [LoginModalComponent],
})
export class LoginModalModule {}
