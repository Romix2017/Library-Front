import { createAction, props } from '@ngrx/store';
import { BooksDTO } from '../../repository/DTO/BooksDTO';

export const addBook = createAction("[Books Page] Add book", props<{ books: BooksDTO }>());
export const getAllBooks = createAction("[Books Page] Get all books");
export const AllBooksLoadedSuccessfully = createAction("[Books API] Books loaded Success", props<{ payload: { books: BooksDTO[] } }>());
export const BooksError = createAction("[Books API] Books load error");
