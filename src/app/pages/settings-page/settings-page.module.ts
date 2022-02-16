import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPageRoutingModule } from './settings-page-routing.module';

import { SettingsPageComponent } from './settings-page.component';
import { SidenavModule } from 'src/app/components/sidenav/sidenav.module';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule,
    SettingsPageRoutingModule,
    SidenavModule
  ],
})
export class SettingsPageModule {}
