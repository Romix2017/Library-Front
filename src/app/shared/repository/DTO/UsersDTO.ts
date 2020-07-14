import { AbstractDTO } from './AbstractDTO';

export class UsersDTO extends AbstractDTO {

  constructor() {
    super()
    super.className = "UsersDTO";
  }
  id: number;
  dob: Date;
  rolesId: number;
  firstName: string;
  lastName: string;
  userName: string;
}
