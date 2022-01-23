import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string, ): Observable<any> {
    params = params.append('username', login);
    params = params.append('password', password);
    return this.http.post(`${BASE_API_URL}/connect/token`, params, {headers});
  }
}
