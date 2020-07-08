import { createAction, props } from '@ngrx/store';
import { RolesDTO } from '../../repository/DTO/RolesDTO';

export const addRole = createAction("[Roles Page] Add role", props<{ role: RolesDTO }>());
export const deleteRole = createAction("[Roles Page] Delete role", props<{ roleId: number }>());
export const getAllRoles = createAction("[Roles Page] Get all roles");
export const updateRole = createAction("[Roles Page] Update role", props<{ role: RolesDTO }>());
export const AllRolesLoadedSuccessfully = createAction("[Roles API] Roles loaded Success", props<{ payload: { roles: RolesDTO[] } }>());
export const RoleDeletedSuccessfully = createAction("[Roles API] Roles deleted successfully", props<{ payload: { roleId: number } }>());
export const RoleCreatedSuccessfully = createAction("[Role API] Role created successfully", props<{ payload: { role: RolesDTO } }>());
export const RoleUpdatedSuccessfully = createAction("[Role API] Role updated successfully", props<{ payload: { role: RolesDTO } }>());
export const RoleLoadError = createAction("[Roles API] Roles load error");
export const RoleDeleteError = createAction("[Roles API] Roles delete error");
export const RoleUpdateError = createAction("[Roles API] Roles update error");
export const RoleCreateError = createAction("[Roles API] Roles create error");
