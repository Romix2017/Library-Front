import { UsersDTO } from '../DTO/UsersDTO';
import { IUsersRepository } from '../contracts/IUsersRepository';
import { Repository } from './Repository';

export class UsersRepository extends Repository<UsersDTO> implements IUsersRepository {
}
