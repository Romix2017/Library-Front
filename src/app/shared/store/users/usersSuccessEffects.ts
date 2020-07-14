import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';
import { UserUpdatedSuccessfully, UserCreatedSuccessfully, UserDeletedSuccessfully } from './users.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class UsersSuccessEffect {
  constructor(private actions$: Actions,
    private snackBar: MatSnackBar, private alertService: AlertService) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(UserDeletedSuccessfully, UserCreatedSuccessfully, UserUpdatedSuccessfully),
    tap((success) => {
      this.alertService.SuccessAlert(success.type, this.snackBar);
    })), { dispatch: false });
}
