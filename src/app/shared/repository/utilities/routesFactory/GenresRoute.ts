import { AbstractApiRoute } from './AbsractApiRoute';
import { GENRES_LINK } from '../../../const/repositoryConst';

export class GenresRoute extends AbstractApiRoute {
  routeParams = GENRES_LINK;
}
