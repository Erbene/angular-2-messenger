/**
 * Created by Maia on 12/11/2016.
 */
import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
import { ngForm } from '@angular/forms';
@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})
export class MessageInputComponent {
    constructor(private messageService:MessageService){}
    onSubmit(form: ngForm) {
        console.log(form);
        const message = new Message(form.value.content,'Erbene');
        this.messageService.addMessage(message);
        form.resetForm();
    }
}
