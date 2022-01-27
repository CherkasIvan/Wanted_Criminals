import { Component } from '@angular/core';
import { ClockService } from '../../services/clock-service/clock.service';

@Component({
  selector: 'fw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  clock: any;
  constructor(private _clockService: ClockService) {
    this._clockService.time.subscribe(
      (now: Date) => (this.clock = now.toUTCString())
    );
  }
}
