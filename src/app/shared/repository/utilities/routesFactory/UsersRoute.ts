import { AbstractApiRoute } from './AbsractApiRoute';
import { USERS_LINK } from '../../../const/repositoryConst';

export class UsersRoute extends AbstractApiRoute {
  routeParams = USERS_LINK;
}
