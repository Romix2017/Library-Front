import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() { }
  ErrorAlert(message: string, snackBar: MatSnackBar) {
    snackBar.open(message, null, {
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'right', //'start' | 'center' | 'end' | 'left' | 'right',
      panelClass: ['error-snackbar'],
      duration: 2500
    });
  }
  SuccessAlert(message: string, snackBar: MatSnackBar) {
    snackBar.open(message, null, {
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'right', //'start' | 'center' | 'end' | 'left' | 'right',
      panelClass: ['success-snackbar'],
      duration: 2500
    });
  }
}
