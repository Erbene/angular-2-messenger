/**
 * Created by Maia on 12/11/2016.
 */
import { Component, onInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
import { ngForm } from '@angular/forms';
@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})
export class MessageInputComponent implements onInit {
    private message:Message;

    constructor(private messageService:MessageService){}

    onSubmit(form: ngForm) {
        if(this.message){
            //Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message).subscribe(
                (data) => console.log(data),
                (error) => console.log(error)
            );
            this.message = null;
        } else {
            //Create
            const message = new Message(form.value.content,'Erbene');
            this.messageService.addMessage(message).subscribe(
                    data => console.log(data),
                    error => console.log(error)
            );
        }
        form.resetForm();
    }
    ngOnInit(){
        this.messageService.onEditEvent.subscribe((message:Message)=> this.message = message);
    }
    onClear(form:ngForm){
        this.message = null;
        form.resetForm();
    }
}
