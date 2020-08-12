import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mapTo, tap, catchError } from 'rxjs/operators';
import { Tokens } from '../models/tokens';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { RegisterDTO } from '../../../shared/repository/DTO/RegisterDTO';
import { LoginDTO } from '../../../shared/repository/DTO/LoginDTO';
import * as jwt_decode from "jwt-decode";
import { Role } from '../../../shared/enums/role';
import { TokenModel } from '../../../shared/repository/models/tokenModel';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  private loggedUser: string;

  constructor(private http: HttpClient) { }

  register(user: RegisterDTO): Observable<any> {
    return this.http.post("http:\\\\localhost:5000\\api\\login\\register", user)
      .pipe(
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        })
      )
  }
  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>("http:\\\\localhost:5000\\api\\login\\Authenticate", user)
      .pipe(tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }))
  }
  logout(): Observable<boolean> {
    let loginModel = new LoginDTO();
    loginModel.tokenString = this.getJwtToken();
    return this.http.post<any>("http:\\\\localhost:5000\\api\\login\\revoke", loginModel).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        return of(false);
      }));
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }
  getCurrentUserName(): string {
    let res: string = "";
    let token: TokenModel = this.getDecodedAccessToken(this.getJwtToken());
    if (token) {
      res = token.userName;
    }
    return res;
  }
  getCurrentUserRole(): string {
    let res: string = "";
    let token: TokenModel = this.getDecodedAccessToken(this.getJwtToken());
    if (token) {
      res = token.role;
    }
    return res;
  }
  isAdmin() {
    return this.getCurrentUserRole() === Role.Admin;
  }
  isSuperuser() {
    return this.getCurrentUserRole() === Role.Superuser;
  }
  isUser() {
    return this.getCurrentUserRole() === Role.User;
  }
  isLoggedIn() {
    return !!this.getJwtToken();
  }
  refreshToken() {
    return this.http.post<any>("http:\\\\localhost:5000\\api\\login\\refresh", {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.token);
    }))
  }
  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }
  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }
  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }
  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }
  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }
  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }
  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
