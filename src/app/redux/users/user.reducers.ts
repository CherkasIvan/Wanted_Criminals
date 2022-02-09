import { USER_ACTIONS } from './users.actions';
import { UserActions } from './users.actions';
import { UsersState, intialUserState } from './users.state';

export const userReducers = (
  state = intialUserState,
  action: UserActions
): UsersState => {
  switch (action.type) {
    case USER_ACTIONS.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    default:
      return state;
  }
};
