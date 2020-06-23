import { createAction, props } from '@ngrx/store';
import { BooksDTO } from '../../repository/DTO/BooksDTO';

export const addBook = createAction("[Books Page] Add book", props<{ book: BooksDTO }>());
export const deleteBook = createAction("[Books Page] Delete book", props<{ bookId: number }>());
export const getAllBooks = createAction("[Books Page] Get all books");
export const updateBook = createAction("[Books Page] Update book", props<{ book: BooksDTO }>());
export const AllBooksLoadedSuccessfully = createAction("[Books API] Books loaded Success", props<{ payload: { books: BooksDTO[] } }>());
export const BookDeletedSuccessfully = createAction("[Books API] Book deleted successfully", props<{ payload: { bookId: number } }>());
export const BookCreatedSuccessfully = createAction("[Books API] Book created successfully", props<{ payload: { book: BooksDTO } }>());
export const BookUpdatedSuccessfully = createAction("[Books API] Book updated successfully", props<{ payload: { book: BooksDTO } }>());
export const BooksLoadError = createAction("[Books API] Books load error");
export const BooksDeleteError = createAction("[Books API] Books delete error");
export const BooksUpdateError = createAction("[Books API] Books update error");
export const BooksCreateError = createAction("[Books API] Books create error");
