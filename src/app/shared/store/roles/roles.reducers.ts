import { createReducer, on, Action } from '@ngrx/store';
import { BooksStore } from '../books/books.store';
import * as RolesActions from './roles.actions';
import { RolesStore, initialState } from './roles.store';

const Reducers = createReducer(
  initialState,
  on(RolesActions.RoleCreatedSuccessfully, (state: RolesStore, { payload }) => ({
    ...state,
    RolesState: [
      ...state.RolesState,
      payload.role]
  })),
  on(RolesActions.AllRolesLoadedSuccessfully, (state: RolesStore, { payload }) => (
    {
      ...state,
      RolesState: payload.roles
    })),
  on(RolesActions.RoleDeletedSuccessfully, (state: RolesStore, { payload }) => ({
    ...state,
    RolesState: state.RolesState.filter(val => val.id !== payload.roleId)
  })),
  on(RolesActions.RoleUpdatedSuccessfully, (state: RolesStore, { payload }) => ({
    ...state,
    BooksState: state.RolesState.map(x => {
      if (x.id == payload.role.id) { x = payload.role }
      return x;
    })
  })),
  on(RolesActions.RoleLoadError, (state: RolesStore) => (
    {
      ...state,
      RolesState: []
    }
  ))
);

export function RolesReducers(state: RolesStore | undefined, action: Action) {
  return Reducers(state, action);
}
