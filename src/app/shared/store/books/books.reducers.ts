import { createReducer, on, Action } from '@ngrx/store';

import * as BooksActions from './books.actions';
import { initialState, BooksStore } from './books.store';

const Reducers = createReducer(
  initialState,
  on(BooksActions.BookCreatedSuccessfully, (state: BooksStore, { payload }) => ({
    ...state,
    BooksState: [
      ...state.BooksState,
      payload.book]
  })),
  on(BooksActions.AllBooksLoadedSuccessfully, (state: BooksStore, { payload }) => (
    {
      ...state,
      BooksState: payload.books
    })),
  on(BooksActions.BookDeletedSuccessfully, (state: BooksStore, { payload }) => ({
    ...state,
    BooksState: state.BooksState.filter(val => val.id !== payload.bookId)
  })),
  on(BooksActions.BooksLoadError, (state: BooksStore) => (
    {
      ...state,
      BooksState: []
    }
  ))
);

export function BooksReducers(state: BooksStore | undefined, action: Action) {
  return Reducers(state, action);
}
