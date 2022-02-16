import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { CriminalsResponse } from '../../models/criminals';

export enum CRIMINALS_ACTION {
  LOAD_CRIMINALS = '[CRIMINALS] load all criminals',
  LOAD_CRIMINALS_SUCCESS = '[CRIMINALS] load all criminals success',
  LOAD_CRIMINALS_ERROR = '[CRIMINALS] load all criminals with error',
}

export const loadCriminals = createAction(
  CRIMINALS_ACTION.LOAD_CRIMINALS,
  props<{ page: number }>()
);
export const loadCriminalsSuccess = createAction(
  CRIMINALS_ACTION.LOAD_CRIMINALS_SUCCESS,
  props<{ response: CriminalsResponse }>()
);
export const loadCriminalsError = createAction(
  CRIMINALS_ACTION.LOAD_CRIMINALS_ERROR,
  props<{ error: HttpErrorResponse }>()
);
