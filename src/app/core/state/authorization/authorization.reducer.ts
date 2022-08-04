import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user';
import * as AuthorizationActions from './authorization.actions';

export interface AuthState {
  isAuthenticated: boolean;
  token: string;
  user: User | null;
}

const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('accessToken');
  }
  return null;
};
const getUserInfo = (): User | null => {
  if (typeof window !== 'undefined') {
    const userString = localStorage.getItem('userInfo');
    return userString ? JSON.parse(userString) : null;
  }
  return null;
};

export const initialState: AuthState = {
  isAuthenticated: !!getToken(),
  token: getToken() || '',
  user: getUserInfo(),
};

export const authorizationReducer = createReducer(
  initialState,
  on(AuthorizationActions.login, (state) => state),
  on(AuthorizationActions.loginSuccess, (state, { token }) => ({
    ...state,
    token: token,
    isAuthenticated: true,
  })),
  on(AuthorizationActions.getUser, (state, userInfo) => ({
    ...state,
    isAuthenticated: true,
    user: userInfo,
  })),
  on(AuthorizationActions.getUserSuccess, (state) => state),
  on(AuthorizationActions.logout, () => ({
    isAuthenticated: false,
    token: '',
    user: null,
  }))
);
