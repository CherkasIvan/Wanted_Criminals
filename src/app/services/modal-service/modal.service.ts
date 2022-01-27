import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isShowModal: boolean = false;
  constructor() { }

  public openModal(val: boolean) {
    return !val;
  }

  public cancelModal(val: boolean) {
    return !val;
  }
}
