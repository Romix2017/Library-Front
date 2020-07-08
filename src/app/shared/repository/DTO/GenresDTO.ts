import { AbstractDTO } from './AbstractDTO';

export class GenresDTO extends AbstractDTO {

  constructor() {
    super()
    super.className = "GenresDTO";
  }
  id: number;
  name: string;
}
