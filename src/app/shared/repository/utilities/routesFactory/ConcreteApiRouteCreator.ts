import { AbstractDTO } from '../../DTO/AbstractDTO';
import { AbstractApiRouteCreator } from './AbsractApiRouteCreator';
import { AbstractApiRoute } from './AbsractApiRoute';
import { Books_DTO } from '../../../const/dtoConst';
import { BooksRoute } from './BooksRoute';

export class ConcreteApiRouteCreator<T extends AbstractDTO> extends AbstractApiRouteCreator {

  constructor(private type: T) {
    super();
  }
  GetRoute(): AbstractApiRoute {
    switch (this.type.getClassName()) {
      case Books_DTO: {
        return new BooksRoute();
      }
    }
  }
}
