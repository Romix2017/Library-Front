import { Repository } from './Repository';
import { BooksDTO } from '../DTO/BooksDTO';
import { IBooksRepository } from '../contracts/IBooksRepository';

export class BooksRepository extends Repository<BooksDTO> implements IBooksRepository {
}
