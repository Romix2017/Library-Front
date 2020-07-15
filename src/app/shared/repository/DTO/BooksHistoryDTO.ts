import { AbstractDTO } from './AbstractDTO';

export class BooksHistoryDTO extends AbstractDTO {

  constructor() {
    super()
    super.className = "BooksHistoryDTO";
  }
  id: number
  booksId: number
  booksName: string;
  usersId: number
  usersName: string;
  dateGiven: Date
  dateReturned: Date
  notes: string
}
