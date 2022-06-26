import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('accessToken') || '';

    const authReq = req.clone({
      headers: req.headers.set('Authorization', token),
    });

    return next.handle(authReq);
  }
}
