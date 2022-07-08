import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginForm, Token } from '../models/authorization';
import { User } from '../models/user';
import {
  BehaviorSubject,
  catchError,
  Observable,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { LoaderService } from '.';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private apiUrl = 'http://localhost:3004/auth';
  private isAuthenticated$$ = new BehaviorSubject<boolean>(
    !!localStorage.getItem('accessToken')
  );
  readonly isAuthenticated$ = this.isAuthenticated$$.asObservable();

  private userData$$ = new BehaviorSubject<null | User>(null);
  readonly userData$ = this.userData$$.asObservable();

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private loaderService: LoaderService
  ) {
    if (this.isAuthenticated$$.getValue()) {
      this.getUserInfo().subscribe();
    }
  }

  login(loginFormData: LoginForm): Observable<Token> {
    this.loaderService.setLoading(true);
    return this.http
      .post<Token>(`${this.apiUrl}/login`, loginFormData, this.httpOptions)
      .pipe(
        tap((data: Token) => {
          localStorage.setItem('accessToken', data.token);
          this.isAuthenticated$$.next(true);
          this.loaderService.setLoading(false);
          switchMap(() => this.getUserInfo());
        }),
        catchError(() =>
          throwError(() => new Error('Login failed. Please try again later.'))
        )
      );
  }
  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    this.isAuthenticated$$.next(false);
    this.router.navigate(['/login']);
  }

  private getUserInfo(): Observable<User> {
    const token = localStorage.getItem('accessToken');
    return this.http
      .post<User>(`${this.apiUrl}/userinfo`, { token }, this.httpOptions)
      .pipe(
        tap((user: User) => {
          this.userData$$.next(user);
        }),
        catchError(() =>
          throwError(
            () => new Error('getUserInfo failed. Please try again later.')
          )
        )
      );
  }
}
