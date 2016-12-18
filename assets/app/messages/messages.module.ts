/**
 * Created by Maia on 12/18/2016.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MessageComponent } from "./message.component";
import { MessagesComponent } from "./messages.component";
import { MessageInputComponent } from './message-input.component';
import { MessageListComponent } from './message-list.component';
import { MessageService } from './message.service';

@NgModule({
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessagesComponent,
        MessageInputComponent
    ],
    providers: [MessageService],
    imports: [ FormsModule, CommonModule ]
})
export class MessageModule {

}