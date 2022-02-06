import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';
import { Criminals } from '../models/criminals';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  public response: any;

  constructor(private httpClient: HttpClient) {}

  public getCriminals() {
    const requestURL: string = 'https://api.fbi.gov/wanted';

    return this.httpClient.get<Criminals>(requestURL);
  }
}
