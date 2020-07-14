import { AbstractDTO } from './AbstractDTO';

export class BooksHistoryDTO extends AbstractDTO {

  constructor() {
    super()
    super.className = "BooksHistoryDTO";
  }
  id: number
  booksId: number
  usersId: number
  dateGiven: Date
  dateReturned: Date
  notes: string
}
