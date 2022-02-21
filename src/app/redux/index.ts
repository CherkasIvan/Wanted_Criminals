import { ActionReducerMap } from '@ngrx/store';
import { CriminalsState } from './criminals/criminals.state';
import { criminalsReducers } from './criminals/criminals.reducers';

export interface AppState {
  criminals: CriminalsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  criminals: criminalsReducers,
};
