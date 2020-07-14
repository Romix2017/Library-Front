import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BOOKS_HISTORY_STATE } from './consts';
import { BooksHistoryReducers } from './books-history.reducers';
import { EffectsModule } from '@ngrx/effects';
import { BooksHistoryEffects } from './books-history.effects';
import { BooksHistoryErrorEffect } from './books-historyErrorEffects';
import { BooksHistorySuccessEffect } from './books-historySuccessEffects';

@NgModule({
  imports: [
    StoreModule.forFeature(BOOKS_HISTORY_STATE, BooksHistoryReducers),
    EffectsModule.forFeature([BooksHistoryEffects, BooksHistoryErrorEffect, BooksHistorySuccessEffect])
  ]
})
export class BooksHistoryModule { }
