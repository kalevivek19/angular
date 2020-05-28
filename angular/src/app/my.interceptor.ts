import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);
    // const requests = request.clone({
    //   url: request.url.replace("https://", "http://")              //To manupulate request
    // });
    // console.log(requests);

    return next.handle(request).pipe(tap((responce: HttpEvent<any>) => {
      if (responce instanceof HttpResponse) {
        responce = responce.clone({ body: responce.body });            // To get responce
      }
      console.log(responce);
      return responce;
    }));
  }
}
