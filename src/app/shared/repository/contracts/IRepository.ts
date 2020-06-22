import { Observable } from 'rxjs';

export interface IRepository<T> {
  GetById(id: number): T;
  GetAll(): Observable<T[]>;
  Add(entity: T): Observable<any>;
  AddRange(entities: T[]);
  Remove(id: number): Observable<any>;
  RemoveRange(entities: T[]);
}
