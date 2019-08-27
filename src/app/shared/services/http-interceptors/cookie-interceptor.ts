import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class CookieInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = 'dear sunny';
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });

    return next.handle(authReq);
  }
}
