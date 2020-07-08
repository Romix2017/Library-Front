import { Actions, ofType, createEffect } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RoleLoadError, RoleDeleteError, RoleCreateError, RoleUpdateError } from './roles.actions';

@Injectable()
export class RolesErrorEffect {
  constructor(private actions$: Actions,
    private snackBar: MatSnackBar, private alertService: AlertService) { }
  errorHappened$ = createEffect(() => this.actions$.pipe(
    ofType(RoleLoadError, RoleDeleteError, RoleCreateError, RoleUpdateError),
    tap((error) => {
      this.alertService.ErrorAlert(error.type, this.snackBar);
    })), { dispatch: false });
}
