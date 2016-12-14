/**
 * Created by Maia on 12/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
    selector: 'app-message-list',
    template: `
    <div class="col-md-8 col-md-offset-2">
        <app-message [message]="message"
                     (onEditEvent)="message.content = $event"
                     *ngFor="let message of messages"></app-message>
    </div>
    `
})
export class MessageListComponent implements OnInit {
    messages: Message[];
    constructor(private messageService:MessageService){}
    ngOnInit(){
        return this.messageService.getMessages()
            .subscribe(
            (data) => this.messages = data,
            (error) => console.log(error)
        );
    }
}
