import { AbstractDTO } from '../DTO/AbstractDTO';
import { IRepository } from '../contracts/IRepository';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IApiRoute } from '../utilities/routesFactory/contracts/IApiRoute';
import { HttpClient } from '@angular/common/http';
import { ConcreteApiRouteCreator } from '../utilities/routesFactory/ConcreteApiRouteCreator';

export class Repository<T extends AbstractDTO> implements IRepository<T> {

  private TypeName: string;
  protected currentRoute: IApiRoute;
  constructor(type: T, private http: HttpClient) {
    this.currentRoute = new ConcreteApiRouteCreator<T>(type).GetRoute();
  }

  GetById(id: number): T {
    return <T>{};
  }
  GetAll(): Observable<T[]> {
    return this.http.get(this.currentRoute.getAll())
      .pipe(map((response: { [key: string]: any }) => {
        let myVar = Object
          .keys(response)
          .map(key => ({
            ...response[key]
          }));
        return myVar;
      }));
  }
  Add(entity: T): Observable<any> {
    return this.http.post(this.currentRoute.CreateNewItem(), entity);
  }
  AddRange(entities: T[]) {

  }
  Update(entity: T): Observable<any> {
    return this.http.put(this.currentRoute.Update(), entity);
  }
  Remove(id: number): Observable<any> {
    return this.http.delete(this.currentRoute.DeleteById(id))
  }
  RemoveRange(entities: T[]) {

  }

}
