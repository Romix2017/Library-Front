import { UsersDTO } from '../DTO/UsersDTO';
import { IRepository } from './IRepository';

export interface IUsersRepository extends IRepository<UsersDTO> {
}
