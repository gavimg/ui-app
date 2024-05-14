import { HttpInterceptorFn } from '@angular/common/http';

export const cspInterceptor: HttpInterceptorFn = (req, next) => {
  const cspHeader = "default-src, 'self'; script-src 'self' 'unsafe-inline'";
  const cspRequest = req.clone({
    setHeaders : {
      'Content-Security-Policy': cspHeader
    }
  })
  return next(cspRequest);
};
