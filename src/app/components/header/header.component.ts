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
  clock: any;
  constructor(
    private _clockService: ClockService,
    private _modalService: ModalService
  ) {}

  ngOnInit(): void {
    this._clockService.time.subscribe(
      (now: Date) => (this.clock = now.toUTCString())
    );
    this._modalService.isShowModal = true;
  }

  public openModal(): void {
    this._modalService.isShowModal = true;
  }

  public closeModal(): void {
    this._modalService.isShowModal = false;
  }
}
