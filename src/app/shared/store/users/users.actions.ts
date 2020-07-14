import { createAction, props } from '@ngrx/store';
import { UsersDTO } from '../../repository/DTO/UsersDTO';

export const addUser = createAction("[Users Page] Add user", props<{ user: UsersDTO }>());
export const deleteUser = createAction("[Users Page] Delete user", props<{ userId: number }>());
export const getAllUsers = createAction("[Users Page] Get all users");
export const updateUser = createAction("[Users Page] Update user", props<{ user: UsersDTO }>());
export const AllUsersLoadedSuccessfully = createAction("[Users API] Users loaded Success", props<{ payload: { users: UsersDTO[] } }>());
export const UserDeletedSuccessfully = createAction("[Users API] User deleted successfully", props<{ payload: { userId: number } }>());
export const UserCreatedSuccessfully = createAction("[Users API] User created successfully", props<{ payload: { user: UsersDTO } }>());
export const UserUpdatedSuccessfully = createAction("[Users API] User updated successfully", props<{ payload: { user: UsersDTO } }>());
export const UsersLoadError = createAction("[Users API] Users load error");
export const UsersDeleteError = createAction("[Users API] Users delete error");
export const UsersUpdateError = createAction("[Users API] Users update error");
export const UsersCreateError = createAction("[Users API] Users create error");
