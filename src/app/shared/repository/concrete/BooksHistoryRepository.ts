import { BooksHistoryDTO } from '../DTO/BooksHistoryDTO';
import { IBooksHistoryRepository } from '../contracts/IBooksHistoryRepository';
import { Repository } from './Repository';

export class BooksHistoryRepository extends Repository<BooksHistoryDTO> implements IBooksHistoryRepository {
}
