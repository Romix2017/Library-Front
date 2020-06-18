import { Observable } from 'rxjs';

export interface IRepository<T> {
  GetById(id: number): T;
  GetAll(): Observable<T[]>;
  Add(entity: T): void;
  AddRange(entities: T[]);
  Remove(entity: T);
  RemoveRange(entities: T[]);
}
