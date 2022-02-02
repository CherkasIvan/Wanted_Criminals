import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { map, Observable, pipe, delay } from 'rxjs';

import { User } from '../models/user';
import { Response } from '../models/responses';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public isloggedIn: boolean = false;
  public userData = {
    email: '',
    password: '',
    role: '',
  };

  public isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  public isAuth(): void {
    localStorage.setItem('email', this.userData.email);
    localStorage.setItem('role', this.userData.role);
    this.router.navigate(['/main-page']);
  }

  public disAuth(): void {
    this.userData.role = '';
    localStorage.clear();
    this.router.navigate(['/login-page']);
  }

  constructor(private http: HttpClient, private router: Router) {}

  public login(email: User, password: User): Observable<Response> {
    let requestURL = '../../assets/users-auth.json';

    return this.http.get<Response>(requestURL).pipe(
      map((data: any) => {
        const usersList = data['userList'];
        const authUser = usersList.find((inputValue: any) => {
          if (inputValue.email === email && inputValue.password === password) {
            this.isloggedIn = true;
            this.userData.email = inputValue.email;
            this.userData.password = inputValue.password;
            this.userData.role = inputValue.role;
          }
          return this.isAuth();

          //Переделать логику разлогинивания
          if (
            inputValue.email != email ||
            inputValue.password != password ||
            !inputValue.email ||
            !inputValue.password
          ) {
            this.isloggedIn = false;
            return this.disAuth();
          }
        });
        this.isloggedIn;
        return usersList;
      })
    );
  }
}
