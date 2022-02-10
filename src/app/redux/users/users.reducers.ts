import { createReducer, on } from '@ngrx/store';
import { USER_ACTIONS } from './users.actions';
import { UsersState } from './users.state';

const initialState: UsersState = {
  users: [],
  selectedUser: null,
};

export const usersReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, { users }) => ({
    ...state,
    users: [...state.users, ...users],
  }))
);

export const userReducer = createReducer(
  initialState,
  on(getUserSuccess, (state, { selectedUser }) => ({
    ...state,
    selectedUser: [...state.selectedUser, ...selectedUser],
  }))
);
