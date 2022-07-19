import { createAction, props } from '@ngrx/store';
import { LoginForm, Token, User } from '../../models';

export const login = createAction('[Auth] login', props<LoginForm>());
export const loginSuccess = createAction('[Auth] loginSuccess', props<Token>());
export const logout = createAction('[Auth] logout');
export const logoutSuccess = createAction('[Auth] logoutSuccess');
export const getUser = createAction('[Auth] getUser', props<User>());
export const getUserSuccess = createAction('[Auth] getUserSuccess');
