import { User } from '../../models/user';

export interface UsersState {
  users: User[];
  selectedUser: User;
}

export const intialUserState: UsersState = {
  users: null,
  selectedUser: null,
};
