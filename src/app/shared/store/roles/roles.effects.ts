import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UnitofworkService } from '../../services/unitofwork.service'
import { getAllRoles, AllRolesLoadedSuccessfully, RoleLoadError, deleteRole, RoleDeletedSuccessfully, RoleDeleteError, addRole, RoleCreateError, updateRole, RoleUpdatedSuccessfully, RoleUpdateError, RoleCreatedSuccessfully } from './roles.actions'
import { concatMap, map, catchError, switchMap } from 'rxjs/operators'
import { setSpinnerOn, setSpinnerOff } from '../interfaces/interface.actions'
import { RolesDTO } from '../../repository/DTO/RolesDTO'
import { of, concat } from 'rxjs'
import { Action } from '@ngrx/store'

@Injectable()
export class RolesEffects {
  constructor(private actions$: Actions, private UnitOfWorkService: UnitofworkService) { }
  loadRoles$ = createEffect(() => this.actions$.pipe(
    ofType(getAllRoles),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.RolesRepo.GetAll().pipe(
        map<RolesDTO[], Action>(rolesSet => { return AllRolesLoadedSuccessfully({ payload: { roles: rolesSet } }) }),
        catchError(() => { return of(RoleLoadError()) })
      ),
      of(setSpinnerOff())
    ))
  ))
  deleteRole$ = createEffect(() => this.actions$.pipe(
    ofType(deleteRole),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.RolesRepo.Remove(action.roleId).pipe(
        switchMap(x => {
          return of(RoleDeletedSuccessfully({ payload: { roleId: action.roleId } }))
        }),
        catchError(() => { return of(RoleDeleteError()) })),
      of(setSpinnerOff())
    ))
  ))
  addRole$ = createEffect(() => this.actions$.pipe(
    ofType(addRole),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.RolesRepo.Add(action.role).pipe(
        switchMap(x => {
          return of(RoleCreatedSuccessfully({ payload: { role: x } }))
        }),
        catchError(() => { return of(RoleCreateError()) })),
      of(setSpinnerOff())
    ))
  ))
  updateRole$ = createEffect(() => this.actions$.pipe(
    ofType(updateRole),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.RolesRepo.Update(action.role).pipe(
        switchMap(x => {
          return of(RoleUpdatedSuccessfully({ payload: { role: action.role } }))
        }),
        catchError(() => { return of(RoleUpdateError()) })),
      of(setSpinnerOff())
    ))
  ))
}
