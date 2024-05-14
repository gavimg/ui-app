import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError, timeout } from 'rxjs';

export const timeoutInterceptor: HttpInterceptorFn = (req, next) => {
  const timeoutDuration = 10000;
  return next(req).pipe(
    timeout(timeoutDuration),
    catchError((error)=> {
      if(error.name === 'TimeoutError') {
              // Handle timeout error here
      console.error('Request timed out:', req.url);
      return throwError('Request timmed out');
      }
      return throwError(error);
    })
  )
};
