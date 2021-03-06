import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = 'dear sunny';
    const newReq = req.clone({ setHeaders: { Authorization: authToken } });

    return next.handle(newReq);
  }
}
