import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService, LoaderService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors';
import {
  authorizationReducer,
  AuthState,
} from 'src/app/core/state/authorization/authorization.reducer';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthorizationEffects } from './state/authorization';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface CoreState {
  auth: AuthState;
}

const reducers: ActionReducerMap<CoreState> = {
  auth: authorizationReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<CoreState, Action>
): ActionReducer<CoreState, Action> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<CoreState, Action>> = [
  localStorageSyncReducer,
];
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthorizationEffects]),
    StoreModule.forRoot(reducers, { metaReducers: [localStorageSyncReducer] }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  declarations: [],
  providers: [AuthorizationService, LoaderService, httpInterceptorProviders],
  exports: [],
})
export class CoreModule {}
