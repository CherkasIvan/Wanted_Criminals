import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

import { Response } from '../models/responses';
import { map, Observable, pipe } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isloggedIn: boolean = false;
  private userData = {
    email: '',
    password: '',
    role: '',
  };

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAuth(): any {
    localStorage.setItem('email', this.userData.email);
    localStorage.setItem('role', this.userData.role);
    this.router.navigate(['/main-page']);
  }

  disAuth(): any {
    localStorage.clear();
  }

  constructor(private http: HttpClient, public router: Router) {}

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
            console.log(this.isloggedIn);
          }
          return this.disAuth();
        });
        this.isloggedIn;
        console.log(this.isloggedIn);
        return usersList;
      })
    );
  }
}
