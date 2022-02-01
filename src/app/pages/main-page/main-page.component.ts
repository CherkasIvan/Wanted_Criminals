import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SidenavComponent } from '../../components/sidenav/sidenav.component';
@Component({
  selector: 'fw-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
