import { UsersStore } from './users.store';
import { USERS_STATE } from './consts';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RolesStore } from '../roles/roles.store';
import { ROLES_STATE } from '../roles/consts';
import { UsersDTO } from '../../repository/DTO/UsersDTO';

export const selectUsersState = createFeatureSelector<UsersStore>(USERS_STATE);
export const selectRolesState = createFeatureSelector<RolesStore>(ROLES_STATE)
export const selectUsers = createSelector(selectUsersState, (state: UsersStore) => state.UsersState);
export const selectUsersJointRoles = createSelector(selectUsersState, selectRolesState, (userStore: UsersStore, rolesStore: RolesStore) => {
  return JoinUserAndRoleArray(userStore.UsersState, rolesStore);
})
function JoinUserAndRoleArray(userArray: UsersDTO[], rolesStore: RolesStore) {
  let newArray = userArray.map(x => {
    let newUser = new UsersDTO();
    newUser.rolesName = rolesStore.RolesState.find(y => y.id == x.rolesId).name;
    newUser.dob = x.dob;
    newUser.firstName = x.firstName;
    newUser.id = x.id;
    newUser.lastName = x.lastName;
    newUser.userName = x.userName;
    return newUser;
  });
  return newArray;
}
