import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksHistoryRoutingModule } from './books-history-routing.module';
import { BooksHistoryComponent } from './books-history/books-history.component';


@NgModule({
  declarations: [BooksHistoryComponent],
  imports: [
    CommonModule,
    BooksHistoryRoutingModule
  ]
})
export class BooksHistoryModule { }
