import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';
import { BookHistoryDeletedSuccessfully, BookHistoryCreatedSuccessfully, BookHistoryUpdatedSuccessfully } from './books-history.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class BooksHistorySuccessEffect {
  constructor(private actions$: Actions,
    private snackBar: MatSnackBar, private alertService: AlertService) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(BookHistoryDeletedSuccessfully, BookHistoryCreatedSuccessfully, BookHistoryUpdatedSuccessfully),
    tap((success) => {
      this.alertService.SuccessAlert(success.type, this.snackBar);
    })), { dispatch: false });
}
