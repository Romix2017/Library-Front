import { UsersDTO } from './UsersDTO';

export class LoginDTO {
  tokenString: string;
  user: UsersDTO;
  refreshToken: string;
}
