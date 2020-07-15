import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksHistoryStore } from './books-history.store';
import { BOOKS_HISTORY_STATE } from './consts';
import { selectBooksState, selectBooks } from '../books/books.selectors';
import { selectUsers } from '../users/users.selectors';
import { BooksDTO } from '../../repository/DTO/BooksDTO';
import { BooksHistoryDTO } from '../../repository/DTO/BooksHistoryDTO';
import { UsersDTO } from '../../repository/DTO/UsersDTO';

export const selectBooksHistoryState = createFeatureSelector<BooksHistoryStore>(BOOKS_HISTORY_STATE);
export const selectBooksHistory = createSelector(selectBooksHistoryState, (state: BooksHistoryStore) => state.BooksHistoryState);

export const selectBooksHistoryJointBooksAndUsers = createSelector(selectBooks, selectBooksHistory, selectUsers,
  (books: BooksDTO[], booksHistory: BooksHistoryDTO[], users: UsersDTO[]) => {
    return JoinBookHistoryUsers(books, booksHistory, users);
  })
function JoinBookHistoryUsers(booksArray: BooksDTO[], booksHistoryArray: BooksHistoryDTO[], usersArray: UsersDTO[]) {
  if (booksArray.length == 0 || booksHistoryArray.length == 0 || usersArray.length == 0) {
    return [];
  }
  let newArray = booksHistoryArray.map(x => {
    let newBookHistory = new BooksHistoryDTO();
    newBookHistory.booksName = booksArray.find(y => y.id == x.booksId).name;
    newBookHistory.booksId = x.booksId;
    newBookHistory.dateGiven = x.dateGiven;
    newBookHistory.dateReturned = x.dateReturned;
    newBookHistory.id = x.id;
    newBookHistory.notes = x.notes;
    newBookHistory.usersId = x.usersId;
    newBookHistory.usersName = usersArray.find(y => y.id == x.usersId).userName;
    return newBookHistory;
  });
  return newArray;
}
