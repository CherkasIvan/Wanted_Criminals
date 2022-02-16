import { User } from '../../models/user';

export interface UsersState {
  users: User[];
  selectedUser: User;
}

