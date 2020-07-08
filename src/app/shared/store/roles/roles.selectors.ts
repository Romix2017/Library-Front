import { RolesStore } from './roles.store';
import { ROLES_STATE } from './consts';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectRolesState = createFeatureSelector<RolesStore>(ROLES_STATE);
export const selectRoles = createSelector(selectRolesState, (state: RolesStore) => state.RolesState);
