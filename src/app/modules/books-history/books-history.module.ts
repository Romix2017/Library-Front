import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksHistoryRoutingModule } from './books-history-routing.module';
import { BooksHistoryComponent } from './books-history/books-history.component';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [BooksHistoryComponent, AddDialogComponent],
  imports: [
    CommonModule,
    BooksHistoryRoutingModule,
    SharedModule
  ]
})
export class BooksHistoryModule { }
