import { createReducer, on, Action } from '@ngrx/store';
import { initialState, BooksHistoryStore } from './books-history.store';
import * as BooksHistoryActions from './books-history.actions';

const Reducers = createReducer(
  initialState,
  on(BooksHistoryActions.BookHistoryCreatedSuccessfully, (state: BooksHistoryStore, { payload }) => ({
    ...state,
    BooksHistoryState: [
      ...state.BooksHistoryState,
      payload.book_history]
  })),
  on(BooksHistoryActions.AllBooksHistoryLoadedSuccessfully, (state: BooksHistoryStore, { payload }) => (
    {
      ...state,
      BooksHistoryState: payload.books_history
    })),
  on(BooksHistoryActions.BookHistoryDeletedSuccessfully, (state: BooksHistoryStore, { payload }) => ({
    ...state,
    BooksHistoryState: state.BooksHistoryState.filter(val => val.id !== payload.book_historyId)
  })),
  on(BooksHistoryActions.BookHistoryUpdatedSuccessfully, (state: BooksHistoryStore, { payload }) => ({
    ...state,
    BooksHistoryState: state.BooksHistoryState.map(x => {
      if (x.id == payload.book_history.id) { x = payload.book_history }
      return x;
    })
  })),
  on(BooksHistoryActions.BooksHistoryLoadError, (state: BooksHistoryStore) => (
    {
      ...state,
      BooksHistoryState: []
    }
  ))
);

export function BooksHistoryReducers(state: BooksHistoryStore | undefined, action: Action) {
  return Reducers(state, action);
}
