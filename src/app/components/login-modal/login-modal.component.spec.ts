import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponen', () => {
  let modal: LoginModalComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginModalComponent, { provide: MatDialogRef, useValue: {} }],
      imports: [
        MatDialogModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
      ],
    });
    modal = TestBed.inject(LoginModalComponent);
  });

  it('should be created', () => {
    expect(modal).toBeTruthy();
  });
});
