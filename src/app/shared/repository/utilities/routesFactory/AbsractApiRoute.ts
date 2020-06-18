import { IApiRoute } from './contracts/IApiRoute';
import { SERVER_PATH, DELIMITER } from '../../../const/repositoryConst';

export abstract class AbstractApiRoute implements IApiRoute {
  protected routeParams: string;

  genericRoute(...params: string[]): string {
    let link: string = SERVER_PATH;
    for (var i = 0; i < params.length; i++) {
      link = link + DELIMITER + params[i];
    }
    return link;
  }
  getAll(): string {
    return this.genericRoute(this.routeParams);
  }
  GetById(elementId: number): string {
    return this.genericRoute(this.routeParams, "" + elementId);
  }
  UpdateById(elementId: number): any {
    return this.genericRoute(this.routeParams, "" + elementId);
  }
  CreateNewItem(): any {
    return this.genericRoute(this.routeParams);
  }
  DeleteById(elementId: number): any {
    return this.genericRoute(this.routeParams, "" + elementId);
  }
}
