import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { ProfileSelectionModule } from '../../components/header/profile-selection/profile-selection.module';
import { SidenavModule } from '../../components/sidenav/sidenav.module';

import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileSelectionModule,
    MainPageRoutingModule,
    SidenavModule,
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {}
