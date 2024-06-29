import { HttpInterceptorFn } from '@angular/common/http';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = '4746a79472mshb4e32011cd91405p1d5108jsn8eddc658a3e7';
  const modifiedReq = req.clone({
    setHeaders: {
      'X-RapidAPI-Key': apiKey,
    },
  });
  return next(modifiedReq);
};
