import { createAction, props } from '@ngrx/store';
import { BooksHistoryDTO } from '../../repository/DTO/BooksHistoryDTO';

export const addBookHistory = createAction("[Books-History Page] Add book-history", props<{ book_history: BooksHistoryDTO }>());
export const deleteBookHistory = createAction("[Books-History Page] Delete book-history", props<{ book_historyId: number }>());
export const getAllBooksHistory = createAction("[Books-History Page] Get all books-history");
export const updateBookHistory = createAction("[Books-History Page] Update book-history", props<{ book_history: BooksHistoryDTO }>());
export const AllBooksHistoryLoadedSuccessfully = createAction("[Books-History API] Books-History loaded Success", props<{ payload: { books_history: BooksHistoryDTO[] } }>());
export const BookHistoryDeletedSuccessfully = createAction("[Books-History API] Book-History deleted successfully", props<{ payload: { book_historyId: number } }>());
export const BookHistoryCreatedSuccessfully = createAction("[Books-History API] Book-History created successfully", props<{ payload: { book_history: BooksHistoryDTO } }>());
export const BookHistoryUpdatedSuccessfully = createAction("[Books-History API] Book-History updated successfully", props<{ payload: { book_history: BooksHistoryDTO } }>());
export const BooksHistoryLoadError = createAction("[Books-History API] Books-History load error");
export const BooksHistoryDeleteError = createAction("[Books-History API] Books-History delete error");
export const BooksHistoryUpdateError = createAction("[Books-History API] Books-History update error");
export const BooksHistoryCreateError = createAction("[Books-History API] Books-History create error");
