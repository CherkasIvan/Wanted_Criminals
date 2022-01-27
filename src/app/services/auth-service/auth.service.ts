import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { find, map, of } from 'rxjs';

import { User } from '../../models/user';

import { LoginModalComponent } from '../../components/login-modal/login-modal.component';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  reqURL: string = '../../../assets/users-auth.json';
  constructor(private http: HttpClient) {}

  public getData(): Observable<User[]> {
    return this.http.get(this.reqURL).pipe(
      map((data: any) => {
        let userList = data['userList'];
        return userList.map(function (user: User) {
          console.log(user);
        });
      })
    );
  }
}
