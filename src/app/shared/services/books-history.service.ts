import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BooksHistoryDTO } from '../repository/DTO/BooksHistoryDTO';
import { Observable } from 'rxjs';
import { getAllBooksHistory, deleteBookHistory, addBookHistory, updateBookHistory } from '../store/books-history/books-history.actions';
import { selectBooksHistory } from '../store/books-history/books-history.selectors';

@Injectable({
  providedIn: 'root'
})
export class BooksHistoryService {

  constructor(private store: Store) { }
  getAllBooksHistory(): Observable<BooksHistoryDTO[]> {
    this.store.dispatch(getAllBooksHistory());
    return this.store.pipe(
      select(selectBooksHistory));
  }
  deleteBookHistory(id: number): void {
    this.store.dispatch(deleteBookHistory({ book_historyId: id }));
  }
  addBookHistory(book_historyId: BooksHistoryDTO): void {
    this.store.dispatch(addBookHistory({ book_history: book_historyId }));
  }
  updateBookHistory(bookHistory: BooksHistoryDTO): void {
    this.store.dispatch(updateBookHistory({ book_history: bookHistory }));
  }
}
