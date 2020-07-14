import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UnitofworkService } from '../../services/unitofwork.service'
import { getAllBooksHistory, AllBooksHistoryLoadedSuccessfully, BooksHistoryLoadError, deleteBookHistory, BookHistoryDeletedSuccessfully, BooksHistoryDeleteError, addBookHistory, BookHistoryCreatedSuccessfully, BooksHistoryCreateError, updateBookHistory, BookHistoryUpdatedSuccessfully, BooksHistoryUpdateError } from './books-history.actions'
import { concatMap, map, catchError, switchMap } from 'rxjs/operators'
import { setSpinnerOn, setSpinnerOff } from '../interfaces/interface.actions'
import { of, concat } from 'rxjs'
import { BooksHistoryDTO } from '../../repository/DTO/BooksHistoryDTO'
import { Action } from '@ngrx/store'

@Injectable()
export class BooksHistoryEffects {
  constructor(private actions$: Actions, private UnitOfWorkService: UnitofworkService) {
  }
  loadBooksHistory$ = createEffect(() => this.actions$.pipe(
    ofType(getAllBooksHistory),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.BooksHistoryRepo.GetAll().pipe(
        map<BooksHistoryDTO[], Action>(booksHistorySet => { return AllBooksHistoryLoadedSuccessfully({ payload: { books_history: booksHistorySet } }) }),
        catchError(() => { return of(BooksHistoryLoadError()) })
      ),
      of(setSpinnerOff())
    ))
  ))
  deleteBookHistory$ = createEffect(() => this.actions$.pipe(
    ofType(deleteBookHistory),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.BooksHistoryRepo.Remove(action.book_historyId).pipe(
        switchMap(x => {
          return of(BookHistoryDeletedSuccessfully({ payload: { book_historyId: action.book_historyId } }))
        }),
        catchError(() => { return of(BooksHistoryDeleteError()) })),
      of(setSpinnerOff())
    ))
  ))
  addBookHistory$ = createEffect(() => this.actions$.pipe(
    ofType(addBookHistory),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.BooksHistoryRepo.Add(action.book_history).pipe(
        switchMap(x => {
          return of(BookHistoryCreatedSuccessfully({ payload: { book_history: x } }))
        }),
        catchError(() => { return of(BooksHistoryCreateError()) })),
      of(setSpinnerOff())
    ))
  ))
  updateBook$ = createEffect(() => this.actions$.pipe(
    ofType(updateBookHistory),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.BooksHistoryRepo.Update(action.book_history).pipe(
        switchMap(x => {
          return of(BookHistoryUpdatedSuccessfully({ payload: { book_history: action.book_history } }))
        }),
        catchError(() => { return of(BooksHistoryUpdateError()) })),
      of(setSpinnerOff())
    ))
  ))
}
