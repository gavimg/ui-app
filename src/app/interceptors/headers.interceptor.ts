import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-Key': 'your-api-key',
  });
  const headersRequest = req.clone({ headers });
  return next(headersRequest);
};
