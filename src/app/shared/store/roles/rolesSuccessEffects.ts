import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';
import { tap } from 'rxjs/operators';
import { RoleDeletedSuccessfully, RoleCreatedSuccessfully, RoleUpdatedSuccessfully } from './roles.actions';

@Injectable()
export class RolesSuccessEffect {
  constructor(private actions$: Actions,
    private snackBar: MatSnackBar, private alertService: AlertService) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(RoleDeletedSuccessfully, RoleCreatedSuccessfully, RoleUpdatedSuccessfully),
    tap((success) => {
      this.alertService.SuccessAlert(success.type, this.snackBar);
    })), { dispatch: false });
}
