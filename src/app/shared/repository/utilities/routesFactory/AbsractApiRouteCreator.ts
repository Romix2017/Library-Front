import { IApiRouteCreator } from './contracts/IApiRouteCreator';
import { AbstractApiRoute } from './AbsractApiRoute';

export abstract class AbstractApiRouteCreator implements IApiRouteCreator {
  abstract GetRoute(): AbstractApiRoute;
}
