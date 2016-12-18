/**
 * Created by Maia on 12/17/2016.
 */
import { Component, OnInit } from '@angular/core';

import { Error } from './error.model';
import { ErrorService } from './error.service';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styles:[`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
    `]
})
export class ErrorComponent implements OnInit {
    private error:Error;
    private display: string = 'none';
    constructor(private errorService: ErrorService){}
    ngOnInit(){
        this.errorService.errorOccurred.subscribe((error:Error)=>{
            console.log('received');
            this.error = error;
            this.display = 'block';
        });
    }
    onErrorHandled() {
        this.display = 'none';
    }

}