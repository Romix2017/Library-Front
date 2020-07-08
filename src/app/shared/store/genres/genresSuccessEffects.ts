import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';
import { GenreUpdatedSuccessfully, GenreCreatedSuccessfully, GenreDeletedSuccessfully } from './genres.actions';
import { tap } from 'rxjs/operators';


@Injectable()
export class GenresSuccessEffect {
  constructor(private actions$: Actions,
    private snackBar: MatSnackBar, private alertService: AlertService) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(GenreDeletedSuccessfully, GenreCreatedSuccessfully, GenreUpdatedSuccessfully),
    tap((success) => {
      this.alertService.SuccessAlert(success.type, this.snackBar);
    })), { dispatch: false });
}
