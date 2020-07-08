import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';
import { GenresLoadError, GenresDeleteError, GenresCreateError, GenresUpdateError } from './genres.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class GenresErrorEffect {
  constructor(private actions$: Actions,
    private snackBar: MatSnackBar, private alertService: AlertService) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(GenresLoadError, GenresDeleteError, GenresCreateError, GenresUpdateError),
    tap((error) => {
      this.alertService.ErrorAlert(error.type, this.snackBar);
    })), { dispatch: false });
}
