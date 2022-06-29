import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginForm, Token } from '../models/authorization';
import { User } from '../models/user';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private apiUrl = 'http://localhost:3004/auth';
  private isAuth: boolean = !!localStorage.getItem('accessToken');

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private router: Router, private http: HttpClient) {}

  login(loginFormData: LoginForm): Observable<Token> {
    return this.http
      .post<Token>(`${this.apiUrl}/login`, loginFormData, this.httpOptions)
      .pipe(
        tap((data: Token) => {
          localStorage.setItem('accessToken', data.token);
          this.isAuth = true;
        }),
        catchError(() =>
          throwError(() => new Error('Login failed. Please try again later.'))
        )
      );
  }
  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    this.isAuth = false;
    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    return this.isAuth;
  }

  getUserInfo(): Observable<User> {
    const token = localStorage.getItem('accessToken');
    return this.http
      .post<User>(`${this.apiUrl}/userinfo`, token, this.httpOptions)
      .pipe(
        catchError(() =>
          throwError(
            () => new Error('getUserInfo failed. Please try again later.')
          )
        )
      );
  }
}
