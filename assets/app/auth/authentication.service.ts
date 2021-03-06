/**
 * Created by Maia on 12/14/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { User } from './user.model';
import { ErrorService } from '../error/error.service';

@Injectable()
export class AuthenticationService {

    constructor(private http:Http, private errorService: ErrorService){}

    signup(user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type':'application/json'})
        return this.http.post('/user/',body,{headers: headers})
            .map((response:Response) => response.json())
            .catch((error:Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    signin(user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type':'application/json'})
        return this.http.post('/user/signin',body,{headers: headers})
            .map((response:Response) => response.json())
            .catch((error:Response) => {
                console.log('emitting to error service');
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    logout(){
        localStorage.clear();
    }
    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }
}
