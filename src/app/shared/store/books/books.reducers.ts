import { createReducer, on, Action } from '@ngrx/store';

import * as BooksActions from './books.actions';
import { initialState, BooksStore } from './books.store';

const Reducers = createReducer(
  initialState,
  on(BooksActions.addBook, (state: BooksStore, { books }) => ({
    ...state,
    BooksState: [
      ...state.BooksState,
      books]
  })),
  on(BooksActions.AllBooksLoadedSuccessfully, (state: BooksStore, { payload }) => (
    {
      ...state,
      BooksState: payload.books
    })),
  on(BooksActions.BooksError, (state: BooksStore) => (
    {
      ...state,
      BooksState: []
    }
  ))
);

export function BooksReducers(state: BooksStore | undefined, action: Action) {
  return Reducers(state, action);
}
