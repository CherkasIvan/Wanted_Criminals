import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { LoginModalComponent } from '../components/login-modal/login-modal.component';
import { LoginModalModule } from '../components/login-modal/login-modal.module';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public isShowModal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}

  public openModal(): void {
    this.isShowModal$.next(true);
  }

  public closeModal(): void {
    this.isShowModal$.next(false);
  }
}
