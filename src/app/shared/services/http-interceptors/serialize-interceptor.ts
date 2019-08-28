import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {SerializeService} from '../serialize.service';

@Injectable()
export class SerializeInterceptor implements HttpInterceptor {

  constructor(private serialize: SerializeService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const contentType = req.headers.get('content-type');
    let newReq = req;

    if (contentType === 'application/x-www-form-urlencoded') {
      if (typeof req.body === 'object') {
        newReq = req.clone({body: this.serialize.serializeData(req.body)});
      }
    }
    return next.handle(newReq);
  }
}
