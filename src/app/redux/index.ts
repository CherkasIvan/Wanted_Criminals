import { ActionReducerMap } from '@ngrx/store';
import { userReducers } from './users/users.reducers';
import { UsersState } from './users/users.state';

export interface AppState {
  users: UsersState;
}

export const appReducers: ActionReducerMap<> = {
  user: userReducers,
};
