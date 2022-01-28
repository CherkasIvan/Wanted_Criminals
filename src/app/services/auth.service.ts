import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Response } from '../models/responses';
import { map, Observable, pipe } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(email: User, password: User): Observable<Response> {
    let userObj = {
      email: '',
      password: '',
    };
    console.log(userObj);
    let requestURL = '../../assets/users-auth.json';

    return this.http.get<Response>(requestURL).pipe(
      map((data: any) => {
        const usersList = data['userList'];

        usersList.find((usersElement: any) => {
          if (
            usersElement.email === email &&
            usersElement.password === password
          ) {
            userObj.email = usersElement.email;
            console.log(userObj.email);
            userObj.password = usersElement.password;
            console.log(userObj.password);
            localStorage.setItem('email', usersElement.email);
          } else {
            localStorage.clear();
          }
          return userObj;
        });
        return usersList;
      })
    );
  }
}
