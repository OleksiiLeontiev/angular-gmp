import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../models';
import { AuthState } from './authorization.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (auth: AuthState): boolean => auth.isAuthenticated
);
export const selectUser = createSelector(
  selectAuthState,
  (auth: AuthState): User | null => auth.user
);
