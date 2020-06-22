import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { AngularModule } from '../../shared/modules/angular/angular.module';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BooksComponent, AddDialogComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AngularModule,
    FormsModule
  ]
})
export class BooksModule { }
