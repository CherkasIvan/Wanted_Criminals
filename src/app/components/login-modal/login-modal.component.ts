import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';

import { ModalService } from '../../services/modal.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { LoginModalModule } from './login-modal.module';

@Component({
  selector: 'fw-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginModalComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  public aSub: Subscription = new Subscription();
  public profileForm!: FormGroup;

  public get f() {
    return this.profileForm.controls;
  }

  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    public authService: AuthService,
    private fb: FormBuilder,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
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
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public login(): void {
    this.profileForm.disable();
    const user: User = {
      email: this.profileForm.value.email,
      password: this.profileForm.value.password,
      role: this.profileForm.value.role,
    };

    this.aSub = this.authService
      .login(this.profileForm.value.email, this.profileForm.value.password)
      .subscribe(
        () => {
          this.dialogRef.close();
        },

        (error) => {
          console.warn(error);
          this.profileForm.enable();
        }
      );
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
