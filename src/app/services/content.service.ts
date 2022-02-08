import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';
import { CriminalsResponse } from '../models/criminals';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private httpClient: HttpClient) {}


  public getCriminals(): Observable<CriminalsResponse> {
    const requestURL: string = 'https://api.fbi.gov/wanted';

    return this.httpClient.get<CriminalsResponse>(requestURL);
  }
}
