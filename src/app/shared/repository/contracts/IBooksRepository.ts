import { BooksDTO } from '../DTO/BooksDTO';
import { IRepository } from './IRepository';

export interface IBooksRepository extends IRepository<BooksDTO> {
}
