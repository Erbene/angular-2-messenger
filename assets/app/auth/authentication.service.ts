/**
 * Created by Maia on 12/14/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { User } from './user.model';

@Injectable()
export class AuthenticationService {

    constructor(private http:Http){}

    signup(user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type':'application/json'})
        return this.http.post('/user/signup',body,{headers: headers})
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()));
    }
}
