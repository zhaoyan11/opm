import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiRewriteInterceptor } from './apiRewrite-interceptor';
import { AuthInterceptor } from './auth-interceptor';
import { SerializeInterceptor } from './serialize-interceptor';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiRewriteInterceptor, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: SerializeInterceptor, multi: true },
];

