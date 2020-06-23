import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, retry, tap } from 'rxjs/operators';
import { BooksLoadError, BooksDeleteError, BooksCreateError, BookDeletedSuccessfully, BookCreatedSuccessfully, BookUpdatedSuccessfully } from '../books/books.actions';
import { EMPTY, Observable } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Injectable()
export class BooksSuccessEffect {
  constructor(private actions$: Actions,
    private snackBar: MatSnackBar, private alertService: AlertService) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(BookDeletedSuccessfully, BookCreatedSuccessfully, BookUpdatedSuccessfully),
    tap((success) => {
      this.alertService.SuccessAlert(success.type, this.snackBar);
    })), { dispatch: false });
}
