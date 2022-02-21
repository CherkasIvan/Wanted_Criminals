import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { pipe, switchMap, map, catchError, of } from 'rxjs';

import { CriminalsService } from '../../services/criminals.service';

import { CriminalsResponse } from '../../models/criminals';

import {
  loadCriminalsSuccess,
  loadCriminals,
  loadCriminalsError,
} from './criminals.actions';
import { criminalsReducers } from './criminals.reducers';

@Injectable()
export class CrimialsEffects {
  loadCriminals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCriminals),
      switchMap(({ page }) => this.criminalsService.getCriminals(page)) ,
      map((criminalsResponse) =>
        loadCriminalsSuccess({ response: criminalsResponse })
      ),
      catchError((error: HttpErrorResponse) =>
        of(loadCriminalsError({ error }))
      )
    )
  );

  constructor(
    public actions$: Actions,
    private criminalsService: CriminalsService
  ) {}
}
