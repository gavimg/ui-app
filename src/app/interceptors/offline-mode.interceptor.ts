import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';

export const offlineModeInterceptor: HttpInterceptorFn = (req, next) => {
  // Check if the device is offine
  if(!navigator.onLine) {
    // Handle offline mode (e.g., store requests for later)
    console.error('Device is offline, Request not sent:', req.url);
    return throwError(new HttpErrorResponse({ status: 0, statusText: 'Offline'}));
  }
  return next(req);
};
