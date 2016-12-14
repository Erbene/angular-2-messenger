/**
 * Created by Maia on 12/11/2016.
 */
import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import {Message} from './message.model';
@Injectable()
export class MessageService {
    private messages: Message[] = [];
    onEditEvent:EventEmitter = new EventEmitter<Message>();

    constructor(private http:Http){}

    addMessage(message:Message){
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('/message', body, { headers: headers })
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()));
    }
    getMessages(){
        return this.http.get('/message')
            .map((response:Response) => {
                const messages = response.json().obj;
                let transformedMessages:Message[] = [];
                for(let message of messages){
                    transformedMessages.push(new Message(message.content,'Erbene',null,message.id));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error:Response) => Observable.throw(error.json()));
    }
    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message));
    }
    editMessage(message:Message){
        this.onEditEvent.emit(message);
    }
}
