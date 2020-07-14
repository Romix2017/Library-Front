import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';
import { UsersLoadError, UsersDeleteError, UsersCreateError, UsersUpdateError } from './users.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class UsersErrorEffect {
  constructor(private actions$: Actions,
    private snackBar: MatSnackBar, private alertService: AlertService) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(UsersLoadError, UsersDeleteError, UsersCreateError, UsersUpdateError),
    tap((error) => {
      this.alertService.ErrorAlert(error.type, this.snackBar);
    })), { dispatch: false });
}
