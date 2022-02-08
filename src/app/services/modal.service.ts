import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public isShowLogin: boolean = false;
  public isShowModal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private authService:AuthService) {}

  public showModalComponents(): void {
    this.isShowLogin = false;
    this.isShowModal$.next(true);
  }

  public hideModalComponents(): void {
    this.isShowLogin = false;
    this.isShowModal$.next(false);
    this.authService.disAuth();
  }
}
