import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { loggingInterceptor } from './interceptors/logging.interceptor';
import { cacheInterceptor } from './interceptors/cache.interceptor';
import { timeoutInterceptor } from './interceptors/timeout.interceptor';
import { retryInterceptor } from './interceptors/retry.interceptor';
import { requestTimingInterceptor } from './interceptors/request-timing.interceptor';
import { offlineModeInterceptor } from './interceptors/offline-mode.interceptor';
import { headersInterceptor } from './interceptors/headers.interceptor';
import { cspInterceptor } from './interceptors/csp.interceptor';
import { compressionInterceptor } from './interceptors/compression.interceptor';
import { baseUrlInterceptor } from './interceptors/base-url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([
      authInterceptor,
      loggingInterceptor,
      baseUrlInterceptor,
      cacheInterceptor,
      compressionInterceptor,
      cspInterceptor,
      headersInterceptor,
      loggingInterceptor,
      offlineModeInterceptor,
      requestTimingInterceptor,
      retryInterceptor,
      timeoutInterceptor
    ]))
  ]
};
