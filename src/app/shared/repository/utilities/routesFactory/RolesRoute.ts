import { AbstractApiRoute } from './AbsractApiRoute';
import { ROLES_LINK } from '../../../const/repositoryConst';

export class RolesRoute extends AbstractApiRoute {
  routeParams = ROLES_LINK;
}
