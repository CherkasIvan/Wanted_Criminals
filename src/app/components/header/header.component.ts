import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Observable, timer, share, map } from 'rxjs';

import { ModalService } from '../../services/modal.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'fw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public clock: Observable<string> = timer(0, 1000).pipe(
    map((tick) => new Date().toLocaleString()),
    share()
  );

  constructor(
    public authService: AuthService,
    public modalService: ModalService,
    public translate: TranslateService
  ) {}
}
