import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, retry, tap } from 'rxjs/operators';
import { BooksError } from '../books/books.actions';
import { EMPTY, Observable } from 'rxjs';

@Injectable()
export class ErrorHandlerEffect {
  constructor(private actions$: Actions, private snackBar: MatSnackBar) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(BooksError),
    tap((error) => {
      this.snackBar.open(error.type, 'Ok', {
        duration: 2500
      })
    })), { dispatch: false });
}
