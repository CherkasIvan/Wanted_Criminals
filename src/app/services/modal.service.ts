import { Injectable } from '@angular/core';
import { LoginModalComponent } from '../components/login-modal/login-modal.component';
import { LoginModalModule } from '../components/login-modal/login-modal.module';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public isShowModal: boolean = false;

  constructor() {}

  public openModal(val:any) {
    return !val;
  }

  public closeModal(val:any) {
    return !val;
  }
}
