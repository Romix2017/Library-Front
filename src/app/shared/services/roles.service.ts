import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RolesDTO } from '../repository/DTO/RolesDTO';
import { getAllRoles, deleteRole, addRole, updateRole } from '../store/roles/roles.actions';
import { selectRoles } from '../store/roles/roles.selectors';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  constructor(private store: Store) { }
  getAllRoles(): Observable<RolesDTO[]> {
    this.store.dispatch(getAllRoles());
    return this.store.pipe(
      select(selectRoles));
  }
  deleteRole(id: number): void {
    this.store.dispatch(deleteRole({ roleId: id }));
  }
  addRole(role: RolesDTO): void {
    this.store.dispatch(addRole({ role: role }));
  }
  updateRole(role: RolesDTO): void {
    this.store.dispatch(updateRole({ role: role }));
  }
}
