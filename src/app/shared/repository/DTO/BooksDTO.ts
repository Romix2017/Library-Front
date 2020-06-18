import { AbstractDTO } from './AbstractDTO';

export class BooksDTO extends AbstractDTO {

  constructor() {
    super()
    super.className = "BooksDTO";
  }
  Id: number;
  Name: string;
  Author: string;
  PublishingDate: Date;
  GenresId: number;
  Notation: string;
}
