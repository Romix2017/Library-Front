import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mapTo, tap, catchError } from 'rxjs/operators';
import { Tokens } from '../models/tokens';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { RegisterDTO } from '../../../shared/repository/DTO/RegisterDTO';

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
  logout() {
    return this.http.post<any>(`http:\\localhost:5001\login`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }
  isLoggedIn() {
    return !!this.getJwtToken();
  }
  refreshToken() {
    return this.http.post<any>(`http:\\localhost:5001\refresh`, {
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
