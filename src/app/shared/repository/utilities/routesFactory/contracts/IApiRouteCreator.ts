import { IApiRoute } from './IApiRoute';

export interface IApiRouteCreator {
  GetRoute(): IApiRoute;
}
