import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'fw-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginModalComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  public loginAuthSub: Subscription = new Subscription();
  public profileForm!: FormGroup;
  public isSubmitting = false;
  public hidePassword = true;

  public get f() {
    return this.profileForm.controls;
  }

  public initializeForm(): FormGroup {
    return this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
    });
  }

  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    public authService: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.profileForm = this.initializeForm();

    this.profileForm.valueChanges.subscribe((values) => {
      console.log('Form values changed:', values);
    });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public login(): void {
    if (this.profileForm.invalid) return;

    this.isSubmitting = true;
    this.profileForm.disable();

    this.loginAuthSub = this.authService
      .login(this.profileForm.value.email, this.profileForm.value.password)
      .subscribe(
        () => {
          this.isSubmitting = false;
          this.dialogRef.close();
        },
        (error) => {
          console.error('Login error:', error);
          this.isSubmitting = false;
          this.profileForm.enable();

          this.snackBar.open(
            error.message || 'Login failed. Please try again.',
            'Close',
            {
              duration: 5000,
              panelClass: ['error-snackbar'],
            }
          );
        }
      );
  }

  ngOnDestroy(): void {
    if (this.loginAuthSub) {
      this.loginAuthSub.unsubscribe();
    }
  }
}
