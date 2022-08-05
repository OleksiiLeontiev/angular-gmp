import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.localStorage.getItem('accessToken') || '';

    const authReq = req.clone({
      headers: req.headers.set('Authorization', token),
    });

    return next.handle(authReq);
  }
}
