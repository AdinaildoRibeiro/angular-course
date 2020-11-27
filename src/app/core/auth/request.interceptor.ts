import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor{
    
    constructor(private tokenSevice: TokenService){

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(this.tokenSevice.hasToken()){
            const token = this.tokenSevice.getToken();
            req = req.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }

        return next.handle(req);
    }

}