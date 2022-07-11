import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { AuthorizationService } from 'src/app/core/services';
import * as AuthorizationActions from './authorization.actions';

@Injectable()
export class AuthorizationEffects {
  constructor(
    private actions$: Actions,
    private authorizationService: AuthorizationService
  ) {}

  LogIn = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorizationActions.login),
      switchMap((props) => {
        return this.authorizationService
          .login(props)
          .pipe(map(() => AuthorizationActions.loginSuccess()));
      })
    )
  );
}
