import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UnitofworkService } from '../../services/unitofwork.service'
import { getAllBooks, BooksError, AllBooksLoadedSuccessfully } from './books.actions'
import { setSpinnerOn, setSpinnerOff } from '../interfaces/interface.actions'
import { map, mergeMap, catchError, switchMap, concatMap} from 'rxjs/operators';
import { BooksDTO } from '../../repository/DTO/BooksDTO'
import { Action } from '@ngrx/store';
import { of, concat } from 'rxjs'
@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private UnitOfWorkService: UnitofworkService) { }
  loadQas$ = createEffect(() => this.actions$.pipe(
    ofType(getAllBooks),
    concatMap((action) => concat(
      of(setSpinnerOn()),
      this.UnitOfWorkService.BooksRepo.GetAll().pipe(
        map<BooksDTO[], Action>(booksSet => { return AllBooksLoadedSuccessfully({ payload: { books: booksSet } }) }),
        catchError(() => { return of(BooksError()) })
      ),
      of(setSpinnerOff())
    ))
  ))
}
