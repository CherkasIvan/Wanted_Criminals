import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';

import { HttpService } from '../../services/auth-service/auth.service';
import { ModalService } from '../../services/modal-service/modal.service';

@Component({
  selector: 'fw-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  providers: [HttpService, ModalService],
})
export class LoginModalComponent {
  users: User[] = [];
  profileForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  });
  public get f() {
    return this.profileForm.controls;
  }

  @Output() public modal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public httpService: HttpService,
    private formBuilder: FormBuilder,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.f;
  }

  submit(): void {
    this.httpService
      .getData()
      .subscribe((data: any) => (this.users = data['userList']));
    console.log(this.profileForm.value);
  }

  public cancelModal(): void {
    this.modalService.isShowModal = false;
  }

  ngOnDestroy(): void {
    this.modalService.cancelModal;
  }
}
