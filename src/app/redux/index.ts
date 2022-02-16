import { ActionReducerMap } from '@ngrx/store';
// import { usersReducers } from './users/users.reducers';
// import { UsersState } from './users/users.state';
import { CriminalsState } from './criminals/criminals.state';
import { criminalsReducers } from './criminals/criminals.reducers';

export interface AppState {
  // users: UsersState;
  criminals: CriminalsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  // users: usersReducers,
  criminals: criminalsReducers,
};
