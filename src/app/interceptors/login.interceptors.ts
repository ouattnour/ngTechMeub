import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HTTP_INTERCEPTORS, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoginInterceptor implements HttpInterceptor{
  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem('token');
    if (token){
      const clonereq = req.clone(
        {
          params : new HttpParams().set('access_token', token)
        }
      );
      return next.handle(clonereq);
    } else {
      return next.handle(req);
    }


  }

}

export const LoginInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoginInterceptor,
  multi: true
}
