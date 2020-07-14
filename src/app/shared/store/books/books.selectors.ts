import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksStore } from './books.store';
import { BOOKS_STATE } from './consts';
import { GENRES_STATE } from '../genres/consts';
import { GenresStore } from '../genres/genres.store';
import { BooksDTO } from '../../repository/DTO/BooksDTO';

export const selectGenresState = createFeatureSelector<GenresStore>(GENRES_STATE);
export const selectBooksState = createFeatureSelector<BooksStore>(BOOKS_STATE);
export const selectBooks = createSelector(selectBooksState, (state: BooksStore) => state.BooksState);
export const selectBooksJointGenres = createSelector(selectBooksState, selectGenresState, (bookStore: BooksStore, genresStore: GenresStore) => {
  return JoinBookAndGenre(bookStore.BooksState, genresStore);
})
function JoinBookAndGenre(booksArray: BooksDTO[], genresStore: GenresStore) {
  let newArray = booksArray.map(x => {
    let newBook = new BooksDTO();
    newBook.genresName = genresStore.GenresState.find(y => y.id == x.genresId).name;
    newBook.author = x.author;
    newBook.genresId = x.genresId;
    newBook.id = x.id;
    newBook.name = x.name;
    newBook.notation = x.name;
    newBook.publishingDate = x.publishingDate;
    return newBook;
  });
  return newArray;
}
