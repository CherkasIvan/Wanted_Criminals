import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'fw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  hide = true;
  email = '';
  password = '';

  // constructor(private http: HttpClient) {}

  // login(login: string, password: string): Observable<any> {
  //   let headers = new HttpHeaders();
  //   headers = headers.append(
  //     'Content-Type',
  //     'application/x-www-form-urlencoded'
  //   );

  //   let params = new HttpParams();
  //   params = params.append('grant_type', 'password');
  //   params = params.append('username', login);
  //   params = params.append('password', password);
  //   params = params.append('client_id', 'HEHApiClient');
  //   params = params.append('scope', 'heh_api');

  //   return this.http.post(`${users-auth}/connect/token`, params, { headers });
  // }

  // getToken(): any {
  //   return localStorage.getItem('isAuth');
  // }

  ngOnInit(): void {}
}
