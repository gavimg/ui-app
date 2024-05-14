import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'https://api.example.com';
  const apiRequest = req.clone({
    url: `${baseUrl}${req.url}`,
  });
  return next(apiRequest);
};
