import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [AuthorizationService, httpInterceptorProviders],
  exports: [],
})
export class CoreModule {}
