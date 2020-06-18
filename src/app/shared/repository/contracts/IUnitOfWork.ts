import { IBooksRepository } from './IBooksRepository';

export interface IUnitOfWork {
  BooksRepo: IBooksRepository;
}
