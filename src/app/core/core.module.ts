import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService, LoaderService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [AuthorizationService, LoaderService, httpInterceptorProviders],
  exports: [],
})
export class CoreModule {}
