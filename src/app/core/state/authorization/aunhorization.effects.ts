import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs';
import { AuthorizationService } from 'src/app/core/services';
import { Token, User } from '../../models';
import * as AuthorizationActions from './authorization.actions';

@Injectable()
export class AuthorizationEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authorizationService: AuthorizationService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorizationActions.login),
      switchMap((props) => {
        return this.authorizationService
          .login(props)
          .pipe(
            map((token: Token) => AuthorizationActions.loginSuccess(token))
          );
      }),
      ofType(AuthorizationActions.loginSuccess),
      tap(({ token }) => this.authorizationService.setToken(token)),
      switchMap(({ token }) => {
        return this.authorizationService
          .getUserInfo(token)
          .pipe(
            map((userInfo: User) => AuthorizationActions.getUser(userInfo))
          );
      }),
      ofType(AuthorizationActions.getUser),
      tap((userInfo) => {
        this.authorizationService.setUserInfo(JSON.stringify(userInfo));
        this.router.navigate(['/']);
      })
    )
  );

  redirectAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthorizationActions.getUserSuccess),
        tap(() => {
          console.log('getUserSuccess');
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthorizationActions.logout),
        tap(() => {
          console.log('logout');
          return this.authorizationService.logout();
        })
      ),
    { dispatch: false }
  );
}
