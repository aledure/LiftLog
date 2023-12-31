import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.userService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        let modifiedReq = req;
        if (user.token) {
          modifiedReq = req.clone({
            params: new HttpParams().set('auth', user.token),
          });
        }
        return next.handle(modifiedReq);
      })
    );
  }
}
