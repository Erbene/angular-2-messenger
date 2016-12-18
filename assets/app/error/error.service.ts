/**
 * Created by Maia on 12/17/2016.
 */
import { EventEmitter } from '@angular/core';

import { Error } from './error.model';

export class ErrorService {
    errorOccurred = new EventEmitter<Error>();
    handleError(error: any){
        console.log('received on error service;');
        const errorData = new Error(error.title,error.error.message);
        console.log('emitting on errorservice');
        this.errorOccurred.emit(errorData);
    }
}