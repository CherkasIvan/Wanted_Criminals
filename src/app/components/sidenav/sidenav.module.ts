import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SidenavModule {}
