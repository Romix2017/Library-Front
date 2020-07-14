import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UnitofworkService } from '../../services/unitofwork.service'
import { getAllUsers, AllUsersLoadedSuccessfully, UsersLoadError, deleteUser, UserDeletedSuccessfully, UsersDeleteError, addUser, UserCreatedSuccessfully, UsersCreateError, updateUser, UserUpdatedSuccessfully, UsersUpdateError } from './users.actions'
import { concatMap, catchError, map, switchMap } from 'rxjs/operators'
import { setSpinnerOn, setSpinnerOff } from '../interfaces/interface.actions'
import { of, concat } from 'rxjs'
import { UsersDTO } from '../../repository/DTO/UsersDTO'
import { Action } from '@ngrx/store'

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private UnitOfWorkService: UnitofworkService) { }
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(getAllUsers),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.UsersRepo.GetAll().pipe(
        map<UsersDTO[], Action>(usersSet => { return AllUsersLoadedSuccessfully({ payload: { users: usersSet } }) }),
        catchError(() => { return of(UsersLoadError()) })
      ),
      of(setSpinnerOff())
    ))
  ))
  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(deleteUser),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.BooksRepo.Remove(action.userId).pipe(
        switchMap(x => {
          return of(UserDeletedSuccessfully({ payload: { userId: action.userId } }))
        }),
        catchError(() => { return of(UsersDeleteError()) })),
      of(setSpinnerOff())
    ))
  ))
  addUser$ = createEffect(() => this.actions$.pipe(
    ofType(addUser),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.UsersRepo.Add(action.user).pipe(
        switchMap(x => {
          return of(UserCreatedSuccessfully({ payload: { user: x } }))
        }),
        catchError(() => { return of(UsersCreateError()) })),
      of(setSpinnerOff())
    ))
  ))
  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(updateUser),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.UsersRepo.Update(action.user).pipe(
        switchMap(x => {
          return of(UserUpdatedSuccessfully({ payload: { user: action.user } }))
        }),
        catchError(() => { return of(UsersUpdateError()) })),
      of(setSpinnerOff())
    ))
  ))
}
