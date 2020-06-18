import { AbstractApiRoute } from './AbsractApiRoute';
import { BOOKS_LINK } from '../../../const/repositoryConst';

export class BooksRoute extends AbstractApiRoute {
  routeParams = BOOKS_LINK;
}
