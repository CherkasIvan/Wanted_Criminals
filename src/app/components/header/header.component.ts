import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { ModalService } from '../../services/modal.service';

import { Observer, Observable, pipe, timer, share, map } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'fw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public clock: Observable<string> = timer(0, 1000).pipe(
    map((tick) => new Date().toLocaleString()),
    share()
  );
  constructor(
    public authService: AuthService,
    public modalService: ModalService,
    public translate: TranslateService
  ) {}
  ngOnInit(): void {
    console.log(this.authService.userData.role);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
