import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fw-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  showFiller = false;
  constructor() {}
}
