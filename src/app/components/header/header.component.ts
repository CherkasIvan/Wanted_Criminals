import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { ClockService } from '../../services/clock.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'fw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public isShowModal$ = this._modalService.isShowModal$;
  clock: any;
  constructor(
    private _clockService: ClockService,
    private _modalService: ModalService
  ) {}

  ngOnInit(): void {
    this._clockService.time.subscribe(
      (now: Date) => (this.clock = now.toUTCString())
    );
  }

  public openModal(): void {
    this.isShowModal$.next(true);
  }

  public closeModal(): void {
    this.isShowModal$.next(false);
  }
}
