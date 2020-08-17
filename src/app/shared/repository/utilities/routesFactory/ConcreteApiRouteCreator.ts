import { AbstractDTO } from '../../DTO/AbstractDTO';
import { AbstractApiRouteCreator } from './AbsractApiRouteCreator';
import { AbstractApiRoute } from './AbsractApiRoute';
import { Books_DTO, Roles_DTO, Genres_DTO, Users_DTO, BooksHistory_DTO, SimpleLogin_DTO } from '../../../const/dtoConst';
import { BooksRoute } from './BooksRoute';
import { RolesRoute } from './RolesRoute';
import { GenresRoute } from './GenresRoute';
import { UsersRoute } from './UsersRoute';
import { BooksHistoryRoute } from './BooksHistoryRoute';
import { LoginRoute } from './LoginRoute';

export class ConcreteApiRouteCreator<T extends AbstractDTO> extends AbstractApiRouteCreator {

  constructor(private type: T) {
    super();
  }
  GetRoute(): AbstractApiRoute {
    switch (this.type.getClassName()) {
      case Books_DTO: {
        return new BooksRoute();
      }
      case Roles_DTO: {
        return new RolesRoute();
      }
      case Genres_DTO: {
        return new GenresRoute();
      }
      case Users_DTO: {
        return new UsersRoute();
      }
      case BooksHistory_DTO: {
        return new BooksHistoryRoute();
      }
      case SimpleLogin_DTO: {
        return new LoginRoute();
      }
    }
  }
}
