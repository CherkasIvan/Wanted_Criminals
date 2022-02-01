import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ModalService } from '../../services/modal.service';

import { Observer, Observable, pipe, timer, share, map } from 'rxjs';

@Component({
  selector: 'fw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isShowModal$ = this._modalService.isShowModal$;
  public clock: Observable<string> = timer(0, 1000).pipe(
    map((tick) => new Date().toLocaleString()),
    share()
  );

  constructor(private _modalService: ModalService) {}

  public openModal(): void {
    this.isShowModal$.next(true);
  }

  public closeModal(): void {
    this.isShowModal$.next(false);
  }
}
