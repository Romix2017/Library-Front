import { AbstractApiRoute } from './AbsractApiRoute';
import { LOGIN_LINK, DELIMITER, AUTHENTICATE, REGISTER, LOGOUT, REFRESH } from '../../../const/repositoryConst';

export class LoginRoute extends AbstractApiRoute {
  LoginLink() {
    return this.genericRoute(LOGIN_LINK, AUTHENTICATE);
  }
  RegisterLink() {
    return this.genericRoute(LOGIN_LINK, REGISTER);
  }
  LogoutLink() {
    return this.genericRoute(LOGIN_LINK, LOGOUT);
  }
  RefreshLink() {
    return this.genericRoute(LOGIN_LINK, REFRESH);
  }
}
