import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksDTO } from '../repository/DTO/BooksDTO';
import { getAllBooks } from '../store/books/books.actions';
import { selectBooks } from '../store/books/books.selectors';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private store: Store) { }

  getAllBooks(): Observable<BooksDTO[]> {
    this.store.dispatch(getAllBooks());
    return this.store.pipe(
      select(selectBooks));
  }
}
