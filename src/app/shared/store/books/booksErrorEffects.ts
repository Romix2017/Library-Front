import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, retry, tap } from 'rxjs/operators';
import { BooksLoadError, BooksDeleteError } from '../books/books.actions';
import { EMPTY, Observable } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Injectable()
export class BooksErrorEffect {
  constructor(private actions$: Actions,
    private snackBar: MatSnackBar, private alertService: AlertService) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(BooksLoadError, BooksDeleteError),
    tap((error) => {
      this.alertService.ErrorAlert(error.type, this.snackBar);
    })), { dispatch: false });
}
