import { BOOKS_STATE } from './consts';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BooksReducers } from './books.reducers';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './books.effects';
import { BooksErrorEffect } from './booksErrorEffects';

@NgModule({
  imports: [
    StoreModule.forFeature(BOOKS_STATE, BooksReducers),
    EffectsModule.forFeature([BooksEffects, BooksErrorEffect])
  ]
})
export class BooksModule { }
