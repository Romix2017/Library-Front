import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';
import { BooksHistoryLoadError, BooksHistoryDeleteError, BooksHistoryCreateError, BooksHistoryUpdateError } from './books-history.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class BooksHistoryErrorEffect {
  constructor(private actions$: Actions,
    private snackBar: MatSnackBar, private alertService: AlertService) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(BooksHistoryLoadError, BooksHistoryDeleteError, BooksHistoryCreateError, BooksHistoryUpdateError),
    tap((error) => {
      this.alertService.ErrorAlert(error.type, this.snackBar);
    })), { dispatch: false });
}
