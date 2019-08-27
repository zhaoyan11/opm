import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ApiRewriteInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newApi = req.url.replace(/\/api/g, environment.apiUrl);
    return next.handle(req.clone({ url: newApi }));
  }
}
