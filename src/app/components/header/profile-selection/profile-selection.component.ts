import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginModalComponent } from '../../login-modal/login-modal.component';

@Component({
  selector: 'fw-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss'],
})
export class ProfileSelectionComponent {
  public show:boolean = true;
  public showModal: boolean = false;

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      panelClass: 'custom-dialog-container',
    });
    this.show = false;
    this.showModal = true;
  }
}
