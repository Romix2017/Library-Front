import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UnitofworkService } from '../../services/unitofwork.service'
import { getAllGenres, AllGenresLoadedSuccessfully, GenresLoadError, deleteGenre, GenreDeletedSuccessfully, GenresDeleteError, addGenre, GenreCreatedSuccessfully, GenresCreateError, updateGenre, GenreUpdatedSuccessfully, GenresUpdateError } from './genres.actions'
import { concatMap, map, catchError, switchMap } from 'rxjs/operators'
import { setSpinnerOn, setSpinnerOff } from '../interfaces/interface.actions'
import { GenresDTO } from '../../repository/DTO/GenresDTO'
import { Action } from '@ngrx/store'
import { concat, of } from 'rxjs'

@Injectable()
export class GenresEffects {
  constructor(private actions$: Actions, private UnitOfWorkService: UnitofworkService) { }
  loadGenres$ = createEffect(() => this.actions$.pipe(
    ofType(getAllGenres),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.GenresRepo.GetAll().pipe(
        map<GenresDTO[], Action>(genresSet => { return AllGenresLoadedSuccessfully({ payload: { genres: genresSet } }) }),
        catchError(() => { return of(GenresLoadError()) })
      ),
      of(setSpinnerOff())
    ))
  ))
  deleteGenre$ = createEffect(() => this.actions$.pipe(
    ofType(deleteGenre),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.GenresRepo.Remove(action.genreId).pipe(
        switchMap(x => {
          return of(GenreDeletedSuccessfully({ payload: { genreId: action.genreId } }))
        }),
        catchError(() => { return of(GenresDeleteError()) })),
      of(setSpinnerOff())
    ))
  ))
  addGenre$ = createEffect(() => this.actions$.pipe(
    ofType(addGenre),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.GenresRepo.Add(action.genre).pipe(
        switchMap(x => {
          return of(GenreCreatedSuccessfully({ payload: { genre: x } }))
        }),
        catchError(() => { return of(GenresCreateError()) })),
      of(setSpinnerOff())
    ))
  ))
  updateGenre$ = createEffect(() => this.actions$.pipe(
    ofType(updateGenre),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.GenresRepo.Update(action.genre).pipe(
        switchMap(x => {
          return of(GenreUpdatedSuccessfully({ payload: { genre: action.genre } }))
        }),
        catchError(() => { return of(GenresUpdateError()) })),
      of(setSpinnerOff())
    ))
  ))
}
