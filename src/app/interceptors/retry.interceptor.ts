import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  // Define the maximum number of retries
  const maxRetries = 3;
  return next(req).pipe(retry(maxRetries));
};
