import { UsersStore } from './users.store';
import { USERS_STATE } from './consts';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUsersState = createFeatureSelector<UsersStore>(USERS_STATE);
export const selectUsers = createSelector(selectUsersState, (state: UsersStore) => state.UsersState);
