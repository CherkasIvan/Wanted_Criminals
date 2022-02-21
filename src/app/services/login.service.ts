import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';

import { LoginModalComponent } from '../components/login-modal/login-modal.component';

@Injectable({ rovidedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}
}
