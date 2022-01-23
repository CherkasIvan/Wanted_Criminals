import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';

import { HttpService } from '../../services/http-service/http.service';

@Component({
  selector: 'fw-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  providers: [HttpService],
})
export class LoginModalComponent implements OnInit {
  submitted = false;
  users: User[] = [];
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder
  ) {}

  @Output() public modal: EventEmitter<boolean> = new EventEmitter<boolean>();

  get f() {
    return this.profileForm.controls;
  }

  submit(): void {
    this.httpService
      .getData()
      .subscribe((data: any) => (this.users = data['userList']));
    console.log(this.profileForm.value);
  }

  cancel(): void {
    this.modal.emit(false);
  }
  ngOnInit(): void {}
}
