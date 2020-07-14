import { createReducer, on, Action } from '@ngrx/store';
import { initialState, UsersStore } from './users.store';
import * as UsersActions from './users.actions';

const Reducers = createReducer(
  initialState,
  on(UsersActions.UserCreatedSuccessfully, (state: UsersStore, { payload }) => ({
    ...state,
    UsersState: [
      ...state.UsersState,
      payload.user]
  })),
  on(UsersActions.AllUsersLoadedSuccessfully, (state: UsersStore, { payload }) => (
    {
      ...state,
      UsersState: payload.users
    })),
  on(UsersActions.UserDeletedSuccessfully, (state: UsersStore, { payload }) => ({
    ...state,
    UsersState: state.UsersState.filter(val => val.id !== payload.userId)
  })),
  on(UsersActions.UserUpdatedSuccessfully, (state: UsersStore, { payload }) => ({
    ...state,
    UsersState: state.UsersState.map(x => {
      if (x.id == payload.user.id) { x = payload.user }
      return x;
    })
  })),
  on(UsersActions.UsersLoadError, (state: UsersStore) => (
    {
      ...state,
      UsersState: []
    }
  ))
);

export function UsersReducers(state: UsersStore | undefined, action: Action) {
  return Reducers(state, action);
}
