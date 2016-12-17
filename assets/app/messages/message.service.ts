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
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('/message'+token, body, { headers: headers })
            .map((response:Response) => {
                const newMessage = new Message(response.json().obj.content,'Erbene',null,response.json().obj._id);
                this.messages.push(newMessage);
                return newMessage;
            })
            .catch((error:Response) => Observable.throw(error.json()));
    }
    getMessages(){
        return this.http.get('/message')
            .map((response:Response) => {
                const messages = response.json().obj;
                let transformedMessages:Message[] = [];
                for(let message of messages){
                    transformedMessages.push(new Message(message.content,'Erbene',null,message._id));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error:Response) => Observable.throw(error.json()));
    }
    deleteMessage(message:Message){
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete('/message/'+message._id + token)
            .map((response:Response) => {
                this.messages.splice(this.messages.indexOf(message));
                return response.json();
            })
            .catch((error:Response) => Observable.throw(error.json()));
    }
    updateMessage(message:Message){
        const body = JSON.stringify(message);
        const token = localStorage.getItem('') ? '?token=' + localStorage.getItem('token') : '';
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.patch('/message/'+message._id+token, body, { headers: headers })
            .map((response:Response) => {
                message.content = response.json().obj.content;
            })
            .catch((error:Response) => Observable.throw(error.json()));
    }
    editMessage(message:Message){
        this.onEditEvent.emit(message);
    }
}
