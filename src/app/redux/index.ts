import { RouterReducerState } from '@ngrx/router-store';
import { UsersState } from './users/users.state';

export interface AppState {
  router?: RouterReducerState;
  users: UsersState;
}

export const initialAppState: AppState = {
  users: intialUserState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
