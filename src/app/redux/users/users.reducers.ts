import { createReducer, on } from '@ngrx/store';

import { getUsers, getUsersSuccess, getUsersError } from './users.actions';
import { UsersState } from './users.state';

const initialState: UsersState = {
  users: [],
  selectedUser,
};

export const usersReducers = createReducer(
  initialState,
  on(getUsersSuccess, (state, { response }) => ({
    ...state,
  }))
);
