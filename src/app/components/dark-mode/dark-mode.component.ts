import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'fw-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeComponent {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
