import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksDTO } from '../repository/DTO/BooksDTO';
import { getAllBooks, deleteBook, addBook, updateBook } from '../store/books/books.actions';
import { selectBooks, selectBooksJointGenres, selectBooksJointGenresOnlyAvailable, selectBooksOnlyAvailableStripped } from '../store/books/books.selectors';
import { map } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BOOK_IS_NOT_AVAILABLE } from '../const/messagesConst';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private store: Store,
    private alertService: AlertService,
    private snackBar: MatSnackBar) { }

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
  getBooksOnlyAvailableStripped(): Observable<BooksDTO[]> {
    this.store.dispatch(getAllBooks());
    return this.store.pipe(select(selectBooksOnlyAvailableStripped));
  }
  getAllBooksStripped(): Observable<BooksDTO[]> {
    this.store.dispatch(getAllBooks());
    return this.store.pipe(select(selectBooks))
  }
  deleteBook(book: BooksDTO): void {
    this.checkForAvailability(book);
    this.store.dispatch(deleteBook({ bookId: book.id }));
  }
  addBook(book: BooksDTO): void {
    this.store.dispatch(addBook({ book: book }));
  }
  updateBook(book: BooksDTO): void {
    this.checkForAvailability(book);
    this.store.dispatch(updateBook({ book: book }));
  }
  private checkForAvailability(book: BooksDTO): void {
    if (book.isAvailable == false) {
      this.alertService.ErrorAlert(BOOK_IS_NOT_AVAILABLE, this.snackBar);
      throw BOOK_IS_NOT_AVAILABLE;
    }
  }
}
