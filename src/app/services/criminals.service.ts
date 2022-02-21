import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, pipe } from 'rxjs';

import { CriminalsResponse } from '../models/criminals';

@Injectable({ providedIn: 'root' })
export class CriminalsService {
  constructor(private httpClient: HttpClient) {}

  public getCriminals(page: number): Observable<CriminalsResponse> {
    const requestURL: string = 'https://api.fbi.gov/wanted';

    return this.httpClient.get<CriminalsResponse>(requestURL, {
      params: {
        page,
      },
    });
  }
}
