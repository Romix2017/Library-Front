import { AbstractDTO } from './AbstractDTO';

export class SimpleLoginDTO extends AbstractDTO {

  constructor() {
    super()
    super.className = "SimpleLoginDTO";
  }
  username: string;
  password: string;
}
