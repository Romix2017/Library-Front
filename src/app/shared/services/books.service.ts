import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksDTO } from '../repository/DTO/BooksDTO';
import { getAllBooks, deleteBook, addBook, updateBook } from '../store/books/books.actions';
import { selectBooks, selectBooksJointGenres, selectBooksJointGenresOnlyAvailable } from '../store/books/books.selectors';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private store: Store) { }

  getAllBooks(): Observable<BooksDTO[]> {
    this.store.dispatch(getAllBooks());
    return this.store.pipe(
      select(selectBooksJointGenres));
  }
  getAllBooksOnlyAvailable(): Observable<BooksDTO[]> {
    this.store.dispatch(getAllBooks());
    return this.store.pipe(
      select(selectBooksJointGenresOnlyAvailable));
  }
  getAllBooksStripped(): Observable<BooksDTO[]> {
    this.store.dispatch(getAllBooks());
    return this.store.pipe(select(selectBooks))
  }
  deleteBook(id: number): void {
    this.store.dispatch(deleteBook({ bookId: id }));
  }
  addBook(book: BooksDTO): void {
    this.store.dispatch(addBook({ book: book }));
  }
  updateBook(book: BooksDTO): void {
    this.store.dispatch(updateBook({ book: book }));
  }
}
