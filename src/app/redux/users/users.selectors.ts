import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.state';

const usersFeatureSelector = createFeatureSelector<UsersState>('user');
const userFeatureSelector = createFeatureSelector<UsersState>('selectedUser');

export const selectedUsers = createSelector(
  usersFeatureSelector,
  (state) => state.users
);

export const selectedUser = createSelector(
  userFeatureSelector,
  (state) => state.selectedUser
);
