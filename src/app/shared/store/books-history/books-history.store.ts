import { BooksHistoryDTO } from '../../repository/DTO/BooksHistoryDTO';

export interface BooksHistoryStore {
  BooksHistoryState: BooksHistoryDTO[];
}
export const initialState: BooksHistoryStore = {
  BooksHistoryState: []
}
