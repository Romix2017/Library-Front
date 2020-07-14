import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksHistoryStore } from './books-history.store';
import { BOOKS_HISTORY_STATE } from './consts';

export const selectBooksHistoryState = createFeatureSelector<BooksHistoryStore>(BOOKS_HISTORY_STATE);
export const selectBooksHistory = createSelector(selectBooksHistoryState, (state: BooksHistoryStore) => state.BooksHistoryState);
