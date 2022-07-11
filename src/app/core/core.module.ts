import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService, LoaderService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors';
import { authorizationReducer } from 'src/app/core/state/authorization/authorization.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(authorizationReducer),
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
