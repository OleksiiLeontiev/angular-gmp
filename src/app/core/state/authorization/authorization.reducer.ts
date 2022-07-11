import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user';
import * as AuthorizationActions from './authorization.actions';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authorizationReducer = createReducer(
  initialState,
  on(AuthorizationActions.login, (state) => state),
  on(AuthorizationActions.loginSuccess, (state) => ({
    ...state,
    isAuthenticated: true,
  })),
  on(AuthorizationActions.logout, () => ({
    isAuthenticated: false,
    user: null,
  }))
);
