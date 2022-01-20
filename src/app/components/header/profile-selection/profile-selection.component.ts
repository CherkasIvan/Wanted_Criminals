import { Component, OnInit } from '@angular/core';

import { LoginModalService } from '../../../services/login-service/login-service.service';
import { LoginModalComponent } from '../../login-modal/login-modal.component';
@Component({
  selector: 'fw-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss'],
})
export class ProfileSelectionComponent implements OnInit {
  bodyText: string;
  constructor(private modalService: LoginModalService) {}

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
