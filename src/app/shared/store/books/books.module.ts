import { BOOKS_STATE } from './consts';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BooksReducers } from './books.reducers';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './books.effects';
import { ErrorHandlerEffect } from '../errorHandlers/errorHandlerEffect';

@NgModule({
  imports: [
    StoreModule.forFeature(BOOKS_STATE, BooksReducers),
    EffectsModule.forFeature([BooksEffects, ErrorHandlerEffect])
  ]
})
export class BooksModule { }
