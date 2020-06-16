import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class AngularModule { }
