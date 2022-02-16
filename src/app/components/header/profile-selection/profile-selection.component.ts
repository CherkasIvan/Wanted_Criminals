import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { BehaviorSubject } from 'rxjs';

import { AuthService } from '../../../services/auth.service';
import { ModalService } from '../../../services/modal.service';

import { LoginModalComponent } from '../../login-modal/login-modal.component';

@Component({
  selector: 'fw-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSelectionComponent {

  public isShowLogin: boolean = this.modalService.isShowLogin;
  public isShowModal$: BehaviorSubject<boolean> =
    this.modalService.isShowModal$;

  constructor(
    private dialog: MatDialog,
    private modalService: ModalService,
    private router: Router,
    private translate: TranslateService
  ) {}

  openModal(): void {
    if (this.isShowLogin) {
      const dialogRef = this.dialog.open(LoginModalComponent, {
        panelClass: 'custom-dialog-container',
      });
      this.modalService.showModalComponents();
      this.isShowLogin = false;
    } else {
      this.modalService.hideModalComponents();
      this.isShowLogin = true;
    }
  }
}
