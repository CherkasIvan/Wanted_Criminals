import { createReducer, on } from '@ngrx/store';
import { loadCriminalsSuccess } from './criminals.actions';
import { CriminalsState } from './criminals.state';

const initialState: CriminalsState = { criminals: [], page: 0, total: 0 };

export const criminalsReducers = createReducer(
  initialState,
  on(loadCriminalsSuccess, (state, { response }) => ({
    ...state,
    criminals: response.items,
    page: response.page,
    total: response.total,
  }))
);
