import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { ModalService } from '../../../services/modal.service';

import { LoginModalComponent } from '../../login-modal/login-modal.component';

@Component({
  selector: 'fw-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSelectionComponent {
  public isShowLogin$: boolean = this.modalService.isShowLogin$;
  public isShowModal$: BehaviorSubject<boolean> =
    this.modalService.isShowModal$;
  constructor(
    private dialog: MatDialog,
    private modalService: ModalService,
    private router: Router
  ) {}

  openModal(): void {
    if (this.isShowLogin$) {
      const dialogRef = this.dialog.open(LoginModalComponent, {
        panelClass: 'custom-dialog-container',
      });

      this.modalService.showModalComponents();
      this.isShowLogin$ = false;
      console.log(this.isShowLogin$);
    } else {
      this.modalService.hideModalComponents();
      this.isShowLogin$ = true;
    }
  }
}
