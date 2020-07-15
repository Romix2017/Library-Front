import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UsersDTO } from '../repository/DTO/UsersDTO';
import { Observable } from 'rxjs';
import { getAllUsers, deleteUser, addUser, updateUser } from '../store/users/users.actions';
import { selectUsers, selectUsersJointRoles } from '../store/users/users.selectors';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private store: Store) { }
  getAllUsers(): Observable<UsersDTO[]> {
    this.store.dispatch(getAllUsers());
    return this.store.pipe(
      select(selectUsersJointRoles));
  }
  getAllUsersStripped(): Observable<UsersDTO[]> {
    this.store.dispatch(getAllUsers());
    return this.store.pipe(select(selectUsers));
  }
  deleteUser(id: number): void {
    this.store.dispatch(deleteUser({ userId: id }));
  }
  addUser(user: UsersDTO): void {
    this.store.dispatch(addUser({ user: user }));
  }
  updateUser(user: UsersDTO): void {
    this.store.dispatch(updateUser({ user: user }));
  }
}
