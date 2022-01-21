import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginModalComponent } from '../../login-modal/login-modal.component';

@Component({
  selector: 'fw-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss'],
})
export class ProfileSelectionComponent implements OnInit {
  public showModal: boolean = false;
  clock = Date.now();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    setInterval(() => {
      this.clock = Date.now();
    }, 1000);
  }

  openModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent);
    this.showModal = true;
  }
}
