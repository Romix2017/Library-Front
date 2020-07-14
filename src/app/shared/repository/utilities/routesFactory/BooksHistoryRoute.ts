import { AbstractApiRoute } from './AbsractApiRoute';
import { BOOKS_HISTORY_LINK } from '../../../const/repositoryConst';

export class BooksHistoryRoute extends AbstractApiRoute {
  routeParams = BOOKS_HISTORY_LINK;
}
