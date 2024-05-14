import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cache = new Map<string, HttpResponse<any>>();
  if(req.method !== 'GET') {
    return next(req);
  }

  const cachedResponse = cache.get(req.url);

  if(cachedResponse) {
    return of(cachedResponse);
  }

  return next(req).pipe(
    tap((event) => {
      if(event instanceof HttpResponse) {
        cache.set(req.url, event)
      }
    })
  )
};
