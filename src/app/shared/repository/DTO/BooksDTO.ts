import { AbstractDTO } from './AbstractDTO';

export class BooksDTO extends AbstractDTO {

  constructor() {
    super()
    super.className = "BooksDTO";
  }
  id: number;
  name: string;
  author: string;
  publishingDate: Date;
  genresId: number;
  notation: string;
}
