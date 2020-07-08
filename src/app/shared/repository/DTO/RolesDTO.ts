import { AbstractDTO } from './AbstractDTO';

export class RolesDTO extends AbstractDTO {

  constructor() {
    super()
    super.className = "RolesDTO";
  }
  id: number;
  name: string;
}
