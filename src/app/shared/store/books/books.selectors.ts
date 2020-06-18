import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksStore } from './books.store';
import { BOOKS_STATE } from './consts';

export const selectBooksState = createFeatureSelector<BooksStore>(BOOKS_STATE);
export const selectBooks = createSelector(selectBooksState, (state: BooksStore) => state.BooksState);
