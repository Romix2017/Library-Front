import { BooksDTO } from '../../repository/DTO/BooksDTO';

export interface BooksStore {
  BooksState: BooksDTO[];
}
export const initialState: BooksStore = {
  BooksState: []
}
