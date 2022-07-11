import { createAction, props } from '@ngrx/store';
import { LoginForm } from '../../models';

export const login = createAction('[Auth] login', props<LoginForm>());
export const loginSuccess = createAction('[Auth] loginSuccess');
export const logout = createAction('[Auth] logout');
export const getUserInfo = createAction('[Auth] getUserInfo');
