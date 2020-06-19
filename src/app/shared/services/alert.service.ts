import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() { }
  ErrorAlert(message: string, snackBar: MatSnackBar) {
    snackBar.open(message, 'Ok', {
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'right', //'start' | 'center' | 'end' | 'left' | 'right',
      panelClass: ['error-snackbar'],
      duration: 2500
    });
  }
}
