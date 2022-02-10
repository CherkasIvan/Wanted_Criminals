import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'fw-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent {}
